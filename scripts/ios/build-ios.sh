#!/bin/sh
set -ex

HERE="scripts/ios"
BUILD_DIR="dist/ios"
NAME="Mastermind"
XCODE_PROJECT="ios/Mastermind.xcodeproj"
ARCHIVE_NAME="${NAME}.xcarchive"
LEGACY_ARCHIVE_PATH="${BUILD_DIR}/archives"
ARCHIVE_PATH="${BUILD_DIR}/${ARCHIVE_NAME}"
EXPORT_OPTIONS_PATH="${HERE}/ArchiveExportOptions-Dev.plist"

EXPORT_INHOUSE_BUILD=false
INHOUSE_IPA_SUFFIX="-int"
INHOUSE_IPA_NAME="${NAME}${INHOUSE_IPA_SUFFIX}"
INHOUSE_DISTRIBUTION_PROFILE="SCEI_INHOUSE"

if [ "$XCODE_SCHEME" = "" ]; then
    XCODE_SCHEME="Mastermind"
fi

CLEAN=false
for x; do
  if [ "$x" = "--clean" ]; then
    CLEAN=true
  fi

  case ${x} in
    "--clean")
      CLEAN=true
    ;;
    "--exportInhouseBuild")
      EXPORT_INHOUSE_BUILD=true
    ;;
  esac
done

# Create the build Dir
mkdir -p ${BUILD_DIR}

# Cleanup existing IPA
rm -rf "${BUILD_DIR}/Mastermind.ipa"
rm -rf "${BUILD_DIR}/Mastermind-int.ipa"
rm -rf "${BUILD_DIR}/Mastermind_QA.ipa"
rm -rf "${BUILD_DIR}/${ARCHIVE_NAME}"
rm -rf "${LEGACY_ARCHIVE_PATH}"

# For help, checkout `man xcodebuild`

# Clean Project
if [ "${CLEAN}" == true ]; then
  xcodebuild clean \
    -project ${XCODE_PROJECT} \
    -scheme ${XCODE_SCHEME}
fi

export RCT_NO_LAUNCH_PACKAGER=1

# Create Archive
xcodebuild archive \
  -project ${XCODE_PROJECT} \
  -scheme ${XCODE_SCHEME} \
  -archivePath ${ARCHIVE_PATH}

export RCT_NO_LAUNCH_PACKAGER=0

# Docs: http://www.matrixprojects.net/p/xcodebuild-export-options-plist/
# Create .ipa from Archive
xcodebuild \
  -exportArchive \
  -archivePath ${ARCHIVE_PATH} \
  -exportPath ${BUILD_DIR} \
  -exportOptionsPlist ${EXPORT_OPTIONS_PATH}

if ${EXPORT_INHOUSE_BUILD}
  then
    EXPORT_OPTIONS_PATH="${HERE}/ArchiveExportOptions-InHouse.plist"

    xcodebuild \
      -exportArchive \
      -archivePath ${ARCHIVE_PATH} \
      -exportPath "${BUILD_DIR}/tmp" \
      -exportOptionsPlist ${EXPORT_OPTIONS_PATH}  \
      PROVISIONING_PROFILE=${INHOUSE_DISTRIBUTION_PROFILE}

    mv "${BUILD_DIR}/tmp/${NAME}.ipa" "${BUILD_DIR}/${INHOUSE_IPA_NAME}.ipa"
    rm -rf "${BUILD_DIR}/tmp"
fi

if [ -z ${JENKINS_HOME} ]
then
  open ${BUILD_DIR}
fi
