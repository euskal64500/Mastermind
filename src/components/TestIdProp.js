import { Platform } from 'react-native';
import Config from 'react-native-config';

// Avoid comparing strings everytime
export const IS_QA_ENV = Config.BUILD_ENV === 'qa';

/**
 * Create test ID property object. This wraps testID property on React Native
 * because testID property is not available on Android.
 * (See: https://github.com/facebook/react-native/pull/9942)
 *
 * Return value is assumed to be embeded as React component properties with spread operator.
 * e.g.
 *  <SomeComponent {...testIdProp('some-test-id')}>
 *  </SomeComponent>
 *
 * Above will be <SomeComponent testID="some-test-id"></SomeComponent> in iOS and
 * <SomeComponent accessibilityLabel="some-test-id"></SomeComponent> in Android.
 *
 * This helper embeds test ID as testID prop on iOS, or accessibilityLabel prop on Android.
 * accessibilityLabel prop is mapped to content-descripton on Android.
 * See: https://github.com/facebook/react-native/blob/a06ced4/ReactAndroid/src/main/java/com/facebook/react/uimanager/BaseViewManager.java#L93
 *
 * On Android, you need to build application with 'qa' scheme because mapping test IDs to
 * accessibility label would break accessibility feature.
 *
 * $ ENVFILE=.env.qa react-native run-android
 *
 * @param  {String} id Actual test ID
 * @return {Object} An object represents test ID property
 */
export default Platform.select({
  ios: (id) => ({ testID: id }),
  android: (id) => (IS_QA_ENV ? { accessibilityLabel: id } : {})
});
