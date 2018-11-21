/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import RestartContainer from '../containers/RestartContainer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'brown',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  }
});

const Menu = () => (
  <View style={styles.container}>
    <RestartContainer />
  </View>
);

Menu.defaultProps = {
};

export default Menu;
