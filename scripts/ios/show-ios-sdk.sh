#!/bin/sh

echo "This script requires an -sdk <sdk> parameter."
echo "Available SDKs (xcodebuild -showsdks):"
echo
xcodebuild -showsdks
