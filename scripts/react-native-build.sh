#!/bin/bash
rm -rf dist/*-bundle/

BUNDLE_DEV=false
for x; do
  case ${x} in
    "--dev")
      BUNDLE_DEV=true
    ;;
  esac
done

echo "Creating iOS Bundle..."
mkdir -p dist/ios-bundle/
node ./node_modules/react-native/local-cli/cli.js bundle \
  --verbose \
  --entry-file index.ios.js \
  --platform ios \
  --dev ${BUNDLE_DEV} \
  --reset-cache \
  --bundle-output "dist/ios-bundle/main.jsbundle" \
  --sourcemap-output "dist/ios-bundle/main.jsbundle.map" \
  --assets-dest "dist/ios-bundle/"

echo -e "\nCreating Android Bundle..."
mkdir -p dist/android-bundle/
node ./node_modules/react-native/local-cli/cli.js bundle \
  --verbose \
  --entry-file index.android.js \
  --platform android \
  --dev ${BUNDLE_DEV} \
  --reset-cache \
  --bundle-output "dist/android-bundle/index.android.bundle" \
  --sourcemap-output "dist/android-bundle/index.android.bundle.map" \
  --assets-dest "dist/android-bundle/"

echo -e "\nBundle Complete!"
