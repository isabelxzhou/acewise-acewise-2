import React from "react";
import { Image, StyleSheet, View, TextInput, TouchableOpacity, Text } from "react-native";
import { CustomFont, FontSize, getHeight, getWidth } from "./GConstant";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import GColor from "./GColors";
import images from "../assets/images";

export const MyCustomerSearchBar = (props) => {
  const { style, ...rest } = props;
  return (
    <View style={[styles.TextInputEditView, style]}
      {...rest}
    >
      <Image source={props.imageSource} style={{ marginLeft: wp(3) }} />
      <TextInput
        style={{ flex: 1, paddingVertical: hp(2), fontSize: FontSize.FontSize16, padding: hp(2) , color:GColor.colorBlack }}
        placeholder={props.placeholder}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        placeholderTextColor={props.placeholderTextColor}

      />

    </View>
  );
};

export const MyCustomerButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.touchableOpacityStyle, props.TouchableStyle]}
      activeOpacity={0.7}
      onPress={props.onPress}
    >
      <Image
        style={props.imageStyle}
        source={props.Image}
        resizeMode={props.resizeMode}
      />
      <Text style={[styles.textStyle, props.textStyle]}>{props.Text}</Text>
    </TouchableOpacity>
  );
};

export const CommonTextInput = (props) => {
  return (
    <View style={[styles.mainViewStyle, props.mainViewStyle]}>
      <Image
        style={[styles.imageStyle, props.ImageStyle]}
        source={props.Image}
        resizeMode="contain"
      />
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor={GColor.placeHolderGray}
        multiline={props.multiline}
        secureTextEntry={props.secureTextEntry}
        style={[styles.textInputStyle, props.textInputStyle]}
        editable={props.editable}
        keyboardType={props.keyboardType}
        autoCapitalize={props.autoCapitalize}
        maxLength={props.maxLength}
      />
      {/* <View style={{flex: 1,}} /> */}
      <TouchableOpacity
        // style={{alignSelf: 'center'}}
        activeOpacity={0.8}
        onPress={props.onPress}
      >
        <Image
          //style={[styles.imageStyle, props.ImageStyleTwo]}
          source={props.ImageTwo}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export const CommonTitleTextInput = (props) => {
  return (
    <View > 
         <View style={[styles.mainViewStyle, props.mainViewStyle]}>
         <Text style={[styles.titleText,props.titleText]}>{props.title}</Text>
      <TextInput
        placeholder={props.placeholder}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor={GColor.placeHolderGray}
        multiline={props.multiline}
        secureTextEntry={props.secureTextEntry}
        style={[styles.textInputStyle, props.textInputStyle]}
        editable={props.editable}
        keyboardType={props.keyboardType}
        autoCapitalize={props.autoCapitalize}
        maxLength={props.maxLength}
      />
      
    </View>
    </View>
  );
};

export const CustomSocialBtn = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.8}
    onPress={props.onPress}
    >
      <Image source={props.imageSource} />
    </TouchableOpacity>
  )
}

export const CustomInput = (props) => {
  return(
    <View style={{ marginTop: getHeight(10) }}>
                        <Text style={[styles.headerText, props.headerTextStyle]}>{props.header}</Text>
                        <TouchableOpacity style={[styles.inputInnerView,{flexDirection:'row',alignItems:'center'}, props.inputMainView]} activeOpacity={0.7} 
                        onPress={props.onPress}
                        >
                            <Text style={[styles.inputStyle,props.placeholderText]}>{props.value}</Text>
                            <Image source={props.lastImage} style={{marginRight:getWidth(25)}} />
                        </TouchableOpacity>
                    </View>
  )
}

export const CustomCreditInput = (props) => {
  return(
    <View style={{ marginTop: getHeight(10) }}>
                        <Text style={[styles.headerText, props.headerTextStyle]}>{props.header}</Text>
                        <TouchableOpacity style={[styles.inputInnerView,{flexDirection:'row',alignItems:'center'},props.inputAmountMainView]} activeOpacity={0.7} 
                        onPress={props.onPress}
                        >
                          <Image source={props.firstImage} style={{marginLeft:wp(5)}} />
                            <Text style={[styles.inputStyle,props.placeholderText,{marginLeft:getWidth(68)}]}>{props.value}</Text>
                            <Image source={props.lastImage} style={{marginRight:getWidth(25)}} />
                        </TouchableOpacity>
                    </View>
  )
}

export const CustomeHeader = (props) => {
  return(
    <View style={{backgroundColor:'#FBFBFB'}}>
    <View style={{flexDirection:'row',alignItems:'center',marginTop:getHeight(35),marginHorizontal:getWidth(20),justifyContent:'space-between'}}>
        <TouchableOpacity style={{}} activeOpacity={0.8} 
        onPress={props.onPress} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        >
            <Image  source={images.menu} />
        </TouchableOpacity>
        <Image  source={props.profileImage}/>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  TextInputEditView: {
    backgroundColor: "#E8EEF3",
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: wp(5),
    marginTop: hp(1.5),
    borderRadius: 13,

  },
  touchableOpacityStyle: {
    backgroundColor: GColor.themeBlue,
    height: hp(6),
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  textStyle: {
    color: GColor.colorwhite,
     fontFamily: CustomFont.FontRegular,
    fontSize: FontSize.FontSize20,

  },
  mainViewStyle: {
    marginBottom: hp(1),
    flexDirection: "row",
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: GColor.placeHolderGray
  },

  textInputStyle: {
    flex: 1,
    padding: 0,
    fontSize: FontSize.FontSize20,
    fontFamily: CustomFont.FontRegular,
    //fontWeight: "500",
    color: GColor.colorBlack,
  },
  imageStyle: {
    marginRight: wp(3)
  },
  titleText: {
    marginTop: hp(4),
    fontSize: FontSize.FontSize18,
    color: GColor.placeHolderGray,
    marginBottom:hp(4.7)
},
inputStyle: {
  marginLeft: getWidth(18),
  marginVertical: getHeight(13),
  fontSize: FontSize.FontSize12,
  flex:1
},
headerText: {
  color: '#6A6A6A',
  fontSize: FontSize.FontSize16,
  fontFamily: CustomFont.FontRegular,
},
inputInnerView: { backgroundColor: GColor.colorwhite, borderRadius: 12, marginTop: getHeight(8), borderWidth: 0.5, borderColor: '#E2E2E2' }

})