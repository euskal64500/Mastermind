#!/bin/sh

if [ $# -eq 0 ]; then
  echo "This script requires an -sdk <sdk> parameter."
  echo "Available SDKs (xcodebuild -showsdks):"
  echo
  xcodebuild -showsdks
  exit 1
fi

set -ex

XCODE_PROJECT="ios/Mastermind.xcodeproj"

if [ "$XCODE_SCHEME" = "" ]; then
    XCODE_SCHEME="Mastermind"
fi

export RCT_NO_LAUNCH_PACKAGER=0

if [ "$CLEAN_BEFORE_BUILD" = "yes" ]; then
  xcodebuild clean \
    -project ${XCODE_PROJECT} \
    -scheme ${XCODE_SCHEME} \
    -UseModernBuildSystem=NO
fi

xcodebuild \
  -arch x86_64 \
  -project "$XCODE_PROJECT" \
  -configuration release \
  -scheme ${XCODE_SCHEME} \
  -UseModernBuildSystem=NO \
  $*

export RCT_NO_LAUNCH_PACKAGER=1

BUILD_PATH=$(xcodebuild -project "$XCODE_PROJECT" -showBuildSettings | grep -m 1 "BUILD_DIR" | grep -oEi "\/.*")
BUILD_FILE="${BUILD_PATH}/Release-iphonesimulator/Mastermind.app"

mkdir -p dist/ios-simulator
cp -r ${BUILD_FILE} dist/ios-simulator

echo "To install in the currently running iOS Simulator:"
echo "xcrun simctl install booted dist/ios-simulator/Mastermind.app"
