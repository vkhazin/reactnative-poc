# https://stackoverflow.com/questions/43696813/react-native-expo-change-default-lan-ip
publicIp=$(curl -s  ipinfo.io/ip) &&
export REACT_NATIVE_PACKAGER_HOSTNAME=$publicIp &&
./node_modules/expo-cli/bin/expo.js start