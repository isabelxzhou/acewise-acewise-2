import { Alert, Linking, PermissionsAndroid, Platform } from "react-native";
import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from "react-native-permissions";

export const CheckPermission = async (cancelBtn, permission, message , callBack) => {
  if (Platform.OS === "android") {
    const hasPermission = await PermissionsAndroid.check(permission);
    console.log("permisson android ==>" , hasPermission)
    if (!hasPermission) {
      if (
        PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN ||
        PermissionsAndroid.RESULTS.DENIED
      ) {
        cancelBtn?.();
        Alert.alert(
          "Ascwise",
          message,
          [
            {
              text: "Dont Allow",
              style: "cancel",
            },
            {
              text: "Allow",
              onPress: () => {
                Linking.openSettings();
              },
            },
          ],
          { cancelable: false }
        );
      }
      else {
        callBack()
      }
    }
    else {
      callBack()
    }
  } else if (Platform.OS === "ios") {
    check(permission).then((result) => {
      console.log("result =>>",result)
      switch (result) {
        case RESULTS.UNAVAILABLE:
        case RESULTS.DENIED:
          request(permission);
          break;
        case RESULTS.BLOCKED:
          Alert.alert('Acewise', message, [
            {
              text: "Dont Allow",
              style: "cancel",
            },
            { text: "Allow", onPress: () => openSettings() },
          ]);
          break;
        case RESULTS.GRANTED:
          callBack()
          break;
        
      }
    });
  }
};