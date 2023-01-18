import { RFValue } from "react-native-responsive-fontsize";
import GColor from "./GColors";
import {showMessage ,hideMessage } from "react-native-flash-message";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PermissionsAndroid, Platform } from "react-native";
import { PERMISSIONS } from "react-native-permissions";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; 
export const FontSize = {
    FontSize7: RFValue(7),
    FontSize8: RFValue(8),
    FontSize9: RFValue(9),
    FontSize10: RFValue(10),
    FontSize11: RFValue(11),
    FontSize12: RFValue(12),
    FontSize13: RFValue(13),
    FontSize14: RFValue(14),
    FontSize15: RFValue(15),
    FontSize16: RFValue(16),
    FontSize17: RFValue(17),
    FontSize18: RFValue(18),
    FontSize20: RFValue(20),
    FontSize22: RFValue(22),
    FontSize24: RFValue(24),
    FontSize25 : RFValue(25),
    FontSize26 : RFValue(26),
    FontSize28: RFValue(28),
    FontSize30: RFValue(30),
    FontSize32: RFValue(32),
    FontSize34: RFValue(34),
    FontSize36: RFValue(36),
    FontSize35: RFValue(35),
    FontSize40: RFValue(40),
} 

export const CustomFont = {
   // FontSemiBold: Platform.OS === "ios" ? "QanelasSoft-SemiBold" : "QanelasSoftSemiBold",
   FontSemiBold : "Poppins-SemiBold",
  // FontRegular : "SpaceMono-Regular",
   Poppins : 'Poppins' ,
   FontRegular :'Poppins-Regular',
}

export const regEx ={
    Reg_ex_email : /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/,
    Reg_ex_number : /^\+?\d[\d -]{8,12}\d$/,
    Reg_ex_name : /^([a-zA-Z ]){2,30}$/,
    Reg_ex_number : /^\+?\d[\d -]{7,12}\d$/,
    Reg_ex_alphaBets : /^[A-Z,a-z ]*$/,
    Reg_ex_cardNumber : /^[0-9\b]+$/,
    Reg_ex_minimumRange : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/,
    new_common_mob_email : /^([0-9]{6})|([A-Za-z0-9._%\+\-]+@[a-z0-9.\-]+\.[a-z]{2,3})$/,
}

export const showMsg =(text) => {
    showMessage({
         message: text,
         type: 'warning',
         backgroundColor: GColor.themeBlue ,
         
       });
}

export async function setData(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log("[Async Storage] Error in set data : ", error);
    }
  }
  export async function getData(key, callback) {
    try {
      var value = await AsyncStorage.getItem(key)
  ;
      callback(value);
    } catch (error) {
      console.log("[Async Storage] Error in get data : ", error);
    }
  }
  
  export const asyncStorageKey = {
    isWalkthroughVisisted: "isWalkthroughVisisted",
    isUserLoggedIn: "isUserLoggedIn",
    userData: "userData",
    encryptedToken: "encryptedToken",
  };


  export const cameraPermission = Platform.select({
    ios: PERMISSIONS.IOS.CAMERA,
    android: PermissionsAndroid.PERMISSIONS.CAMERA,
  });
  export const galleryPermission = Platform.select({
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    android: PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  });
 
  export const cameraPermissionMsg = "Would Like to Access the Camera";
  export const galleryPermissionMsg = "Would Like to Access Your Photos";

  export const getHeight = (data) => {
   // console.log("height" ,(data/667) * 100 )
    let number = (data/667) * 100
      return hp(number) ;
  }

  export const getWidth = (data) => {
    // console.log("height" ,(data/667) * 100 )
     let number = (data/375) * 100
       return wp(number) ;
   }