// https://medium.com/@milind.patil/social-login-for-react-native-app-facebook-linkedin-gmail-815c4832f77
import React from 'react';
import {
    Button,
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; import SplashScreen from 'react-native-splash-screen';
import { apiEndPoint, statusCode } from '../../APIManager/ApiConstants';
import APIManager from '../../APIManager/APIManager';
import APIManagerTemp from '../../APIManager/APIManagerTemp';
import images from '../../assets/images';
import { asyncStorageKeys, storeAsyncData } from '../../common/AsyncstorageFunction';
import GColor from '../../common/GColors';
import { CommonTextInput, CustomSocialBtn, MyCustomerButton } from '../../common/GComponents';
import { CustomFont, FontSize, regEx, showMsg } from '../../common/GConstant';
import { translations } from '../../localize/translation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Deviceinfo from '../../APIManager/Deviceinfo';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginPress: false,
            isSingupPress: false,
            email : '',
            password : '',
            isPasswordShow : true,
        }
    }

componentDidMount = () => {
    if(this.props.route.params.type == 'Login'){
        this.setState({isLoginPress : true , isSingupPress : false})
    }
    else if(this.props.route.params.type == 'Signup'){
        this.setState({isSingupPress : true , isLoginPress : false})
    }
    
}

navigateToHomeScreen = async () => {
    await storeAsyncData(asyncStorageKeys.isuserLogin, 'true');
    this.props.navigation.navigate("MainStack")
  };

validationLogin = () => {
    if (this.state.email.trim() == '') {
      showMsg(translations.please_enter_email);
      return false;
    } else if (!regEx.new_common_mob_email.test(this.state.email)) {
      showMsg(translations.please_enter_valid_userName);
      return false;
    } else if (this.state.password.trim() == '') {
      showMsg(translations.Please_enter_password);
      return false;
    } else {
      //  this.navigateToHomeScreen()
      this.apiCallLogin()
    }
  };

  validationSignup = () => {
    if (this.state.email.trim() == '') {
      showMsg(translations.please_enter_email);
      return false;
    } else if (!regEx.Reg_ex_email.test(this.state.email)) {
      showMsg(translations.please_enter_valid_email);
      return false;
    } else if (this.state.password.trim() == '') {
      showMsg(translations.Please_enter_password);
      return false;
    } 
    // else if (this.state.password.trim().length < 6) {
    //     showMsg(translations.Please_enter_minimum_6_characters);
    //     return false;
    //   } else if (!regEx.Reg_ex_minimumRange.test(this.state.password)) {
    //     showMsg(translations.Password_Validation_Message);
    //     return false;
    //   }
      else {
          this.props.navigation.navigate("CreateAccount",{email : this.state.email , password : this.state.password})
      }
  };

  apiCallLogin = async (lType) => {
    let dictData = {
        device_os: Deviceinfo.getVersion,
        device_token: "0",
        device_uuid: Deviceinfo.getUniqueID,
        password: this.state.password,
        username: this.state.email,
        version: "1"
    };

    console.log("step 1 reach to function");
    APIManagerTemp.makePostRequest(
      apiEndPoint.login,
      dictData,
      this.props,
      async (response) => {
        console.log(response);
        switch (response?.code) {
          case statusCode.success:
            let asyncToken = response.data.token;
            await AsyncStorage.setItem('token', asyncToken);
            await AsyncStorage.getItem('token').then((token) =>
              console.log('sign in - tokenAsyncStorage ======>', token),
            );
            showMsg(response.message)
            this.navigateToHomeScreen()
            break;
          case statusCode.invaildOrFail:
              showMsg(response.message)
              break;
          default:
            showMsg(response.message)
            break;
        }
      },
    );
  };


    render() {
        return (
            <ScrollView style={{flex: 1}} bounces={false} showsVerticalScrollIndicator={false} >
                {/* <FlashMessage position="top" /> */}
                <View style={styles.topView}>
                    <Text style={styles.headerText}>{this.state.isLoginPress ? translations.LogIn : translations.SignUp }</Text>
                    {/* <Text onPress={() => this.props.navigation.goBack()} >GoBack</Text> */}
                    <Text style={[styles.Description1, { marginTop: hp(5.4) }]}>{translations.SinginDesc1}</Text>
                    <Text style={styles.Description1}
                    onPress={() => this.props.navigation.navigate('TermPrivacy')}
                    >{translations.our}
                        <Text style={styles.termPolicyText}> {translations.SinginDesc2}</Text>
                    </Text>
                </View>

                <View>
                    <View style={styles.selectionView}>
                        <TouchableOpacity 
                        activeOpacity={1}
                        style={{ marginRight: wp(5) }}
                            onPress={() => {
                                this.setState({
                                    isLoginPress: true,
                                    isSingupPress: false,
                                })
                            }}
                        >
                            <Text style={[styles.loginSignupText, { textDecorationLine: this.state.isLoginPress ? 'underline' : null, textDecorationColor: GColor.colorBlack, color: this.state.isLoginPress ? GColor.themeBlue : GColor.placeHolderGray }]}>{translations.LogIn}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        activeOpacity={1}
                            onPress={() => {
                                this.setState({
                                    isLoginPress: false,
                                    isSingupPress: true,
                                })
                            }}
                        >
                            <Text style={[styles.loginSignupText, { textDecorationLine: this.state.isSingupPress ? 'underline' : null, textDecorationColor: GColor.colorBlack, color: this.state.isSingupPress ? GColor.themeBlue : GColor.placeHolderGray }]}>{translations.SignUp}</Text>
                        </TouchableOpacity>
                    </View>

                            <View style={styles.inputMainView}>
                                <CommonTextInput
                                textInputStyle={styles.textInput}
                                Image={images.mail_icon}
                                placeholder={translations.Email_Address}
                                mainViewStyle={{marginHorizontal : wp(11.5),}}
                                value={this.state.email}
                                onChangeText = {(text) => this.setState({email : text})}
                                keyboardType="email-address"
                                />
                                
                                 <CommonTextInput
                               Image={images.lock_icon}
                               ImageTwo={images.eye_icon}
                               placeholder={translations.Password}
                                mainViewStyle={{marginHorizontal : wp(11.5),marginTop:hp(6)}}
                                value={this.state.password}
                                onChangeText = {(text) => this.setState({password : text})}
                                onPress={() => this.setState({isPasswordShow : !this.state.isPasswordShow})}
                                secureTextEntry={this.state.isPasswordShow}
                                />
                            </View>

                            <View style={styles.ForgetRemView}>
                                <TouchableOpacity style={{flexDirection:'row',flex:1,}}
                                activeOpacity={0.8}
                                >
                                    <Image source={images.icon_checkbox_selected} />
                                    <Text style={styles.rememberText}>Remember{'\n'}password</Text>
                                </TouchableOpacity>
                                <Text style={styles.forgetpassText}>{translations.Forgot_password}</Text>
                            </View>
                        
                      {this.state.isLoginPress &&
                        <MyCustomerButton
                        TouchableStyle={styles.mainBtnStyle}
                        Text={translations.LogIn}
                        onPress= {() => this.validationLogin()}
                        />
                      }
                      
                      {this.state.isSingupPress && 
                        <MyCustomerButton
                        TouchableStyle={styles.mainBtnStyle}
                        Text={translations.Create_Account}
                        onPress= {() => this.validationSignup()}
                        />
                      }

                        <View style={{marginTop:hp(2),marginHorizontal:wp(25)}}>
                            <Text style={styles.connectText}>{translations.or_connect_with}</Text>
                            <View style={{marginTop:hp(1.8),flexDirection:'row',justifyContent:'space-between'}}>
                                <CustomSocialBtn
                                onPress={() => alert('facebook')}
                                 imageSource ={images.facebook_icon}
                                />
                                <CustomSocialBtn
                                onPress={() => alert('instagram')}
                                 imageSource ={images.instagram_icon}
                                />
                                <CustomSocialBtn
                                onPress={() => alert('pinterest')}
                                 imageSource ={images.pinterest_icon}
                                />
                                <CustomSocialBtn
                                onPress={() => alert('linkedin')}
                                 imageSource ={images.linkedin_icon}
                                />
                            </View>
                        </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    topView: {
        marginTop: hp(10),
        alignItems: 'center'
    },
    headerText: {
        fontSize: FontSize.FontSize40
    },
    Description1: { color: GColor.textColor, fontFamily: CustomFont.FontRegular,fontSize:FontSize.FontSize14 },
    selectionView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: hp(3),
    },
    loginSignupText: {
        fontSize: FontSize.FontSize25,
        fontFamily:CustomFont.FontRegular
    },
    termPolicyText : { 
        color: GColor.themeBlue,
        fontSize:FontSize.FontSize14,
        fontFamily:CustomFont.FontRegular
    },
    inputMainView : {
        marginTop:hp(4)
    },
    textInput : {
        fontSize:FontSize.FontSize20,
        fontFamily:CustomFont.FontRegular
    },
    ForgetRemView : {
        marginTop:hp(5),
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:wp(9)
    },
    forgetpassText : {
        fontSize:FontSize.FontSize14,
        color:GColor.themeBlue,
    },
    connectText : {
        fontSize:FontSize.FontSize14,
        color:'#747070',
        alignSelf:'center'
    },
    mainBtnStyle : {marginHorizontal:wp(13),marginTop:hp(4.2)},
    rememberText : {
        marginLeft:wp(2),
        fontSize:FontSize.FontSize14,
        fontFamily: CustomFont.FontRegular,
        color:GColor.textColor
    }
})