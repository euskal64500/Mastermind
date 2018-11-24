#!/bin/sh
set -ex

HERE="scripts/android"
BUILD_DIR="android"
OUT_DIR="dist/android"
NAME="Mastermind"

CLEAN=false
PROD=false
for x; do
  if [ "$x" = "--clean" ]; then
    CLEAN=true
  fi
  if [ "$x" = "--production" ]; then
    PROD=true
  fi
done

# Create the out dir
mkdir -p ${OUT_DIR}

# Cleanup existing apk
rm -rf "${OUT_DIR}/${NAME}.apk"
rm -rf "${OUT_DIR}/${NAME}-unsigned.apk"

# Set the build timestamp
# if [ "${PROD}" == false ]; then
#   mv ./js/app/application/constants/buildTimestamp.js ./js/app/application/constants/buildTimestamp.js.bak
#   node scripts/generate-build-timestamp.js
# fi

# Build apk
cd ${BUILD_DIR}
if [ "${CLEAN}" == true ]; then
  ././gradlew clean
fi

if [ "${PROD}" == false ]; then
  ././gradlew assembleRelease
  # Copy apk from working dir to the out dir
  cd ../
  cp ${BUILD_DIR}/app/build/outputs/apk/app-release.apk ${OUT_DIR}/${NAME}.apk
else
  export ENVFILE=.env.prod
  ././gradlew assembleProductionRelease
  # Copy apk from working dir to the out dir
  cd ../
  cp ${BUILD_DIR}/app/build/outputs/apk/app-productionRelease-unsigned.apk ${OUT_DIR}/${NAME}-unsigned.apk

  # Sign apk with official certificate
  # Disabled sign and align right now
  ${HERE}/sign-apk.sh ${OUT_DIR} ${NAME}-unsigned.apk ${NAME}-signed-unaligned.apk
  # Zip align
  zipalign -f -v 4 ${OUT_DIR}/${NAME}-signed-unaligned.apk ${OUT_DIR}/${NAME}-signed.apk
fi

# Restore build timestamp file
if [ "${PROD}" == false ]; then
  mv ./js/app/application/constants/buildTimestamp.js.bak ./js/app/application/constants/buildTimestamp.js
fi

if [ -z ${JENKINS_HOME} ]
then
  open ${OUT_DIR}
fi
