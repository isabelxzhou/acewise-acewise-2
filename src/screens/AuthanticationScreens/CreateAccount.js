// // https://medium.com/@milind.patil/social-login-for-react-native-app-facebook-linkedin-gmail-815c4832f77
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
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; import SplashScreen from 'react-native-splash-screen';
import images from '../../assets/images';
import GColor from '../../common/GColors';
import { CommonTextInput, CustomSocialBtn, MyCustomerButton } from '../../common/GComponents';
import { asyncStorageKey, CustomFont, FontSize, regEx, setData, showMsg } from '../../common/GConstant';
import { translations } from '../../localize/translation';
import FlashMessage from 'react-native-flash-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { asyncStorageKeys, storeAsyncData } from '../../common/AsyncstorageFunction';
import APIManager from '../../APIManager/APIManager';
import { apiEndPoint, methodType, statusCode } from '../../APIManager/ApiConstants';
import makeCall from '../../APIManager/APIManager';
import APIManagerTemp from '../../APIManager/APIManagerTemp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Deviceinfo from '../../APIManager/Deviceinfo';

export default class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            businessName: '',
            businessType: '',
            address: '',
            mobileNo: '',
            businessGoals: '',
        }
    }

    componentDidMount = () => {
        this.setState({
            email : this.props.route.params.email,
            password : this.props.route.params.password
        },() => console.log("email",this.state.email))
    }

    apiCallRegister =  () => {
        let dictData = {
            address: this.state.address,
            device_os: Deviceinfo.getVersion,
            device_token: "0",
            device_uuid: Deviceinfo.getUniqueID,
            email: this.state.email,
            name: this.state.businessName,
            password: this.state.password,
            phone: this.state.mobileNo,
            type: this.state.businessType,
            version: "1"
        };
    
        console.log("step 1 reach to function");
        APIManagerTemp.makePostRequest(
          apiEndPoint.register,
          dictData,
          this.props,
          async(response) => {
            console.log(response);
            switch (response?.code) {
              case statusCode.success:
                // setData(asyncStorageKey.userData, JSON.stringify(response?.data));
                // setData(asyncStorageKey.isUserLoggedIn, "true");
                    let asyncToken = response.data.token;
                    await AsyncStorage.setItem('token', asyncToken);
                    await AsyncStorage.getItem('token').then((token) =>
                    console.log('sign in - tokenAsyncStorage ======>', token),
                    );
                    this.navigateToHomeScreen()
                    showMsg(response.message)
                    break;
                case statusCode.invaildOrFail:
                    showMsg(response.message)
                    break;
                default:
                    showMsg(response.message)
                    break;
            }
          }
        );
      };

    


    validNumber = (text) => {
        if (text == '') {
            return true;
        }
        var re = /^[0-9\b]+$/;
        return re.test(text);
    };

    navigateToHomeScreen = async () => {
        await storeAsyncData(asyncStorageKeys.isuserLogin, 'true');
        this.props.navigation.navigate("MainStack")
      };

    validation = () => {
        if (this.state.businessName.trim() == '') {
            showMsg('Please enter business name');
            return false;
        }
        else if (this.state.businessType.trim() == '') {
            showMsg('Please enter business type');
            return false;
        }
        else if (this.state.address.trim() == '') {
            showMsg('Please enter address');
            return false;
        }
        else if (this.state.mobileNo.trim() == '') {
            showMsg('Please enter mobile number');
            return false;
        }
        else if (this.state.mobileNo.trim().length < 10) {
            showMsg('Please enter valid mobile number');
            return false;
        }
        else if (this.state.businessGoals.trim() == '') {
            showMsg('Please enter business goals');
            return false;
        }
        else {
          
          //  this.navigateToHomeScreen()
           
            this.apiCallRegister()
        }
    };


    render() {
        return (
            // <ScrollView style={{flex: 1}} bounces={false} showsVerticalScrollIndicator={false} >
               <KeyboardAwareScrollView style={{flex: 1}} bounces={false} >
                <View style={styles.topView}>
                    <Text style={styles.headerText}>{translations.Create_Account}</Text>
                </View>
                <View style={styles.textinputStyle}>
                    <Text style={styles.titleText}>{translations.name_of_business}</Text>
                    <CommonTextInput
                        textInputStyle={styles.textinput}
                        value={this.state.businessName}
                        onChangeText={(text) => this.setState({ businessName: text })}
                    />
                    <Text style={styles.titleText}>{translations.type_of_business}</Text>
                    <CommonTextInput
                        textInputStyle={styles.textinput}
                        textInputStyle={styles.textinput}
                        value={this.state.businessType}
                        onChangeText={(text) => this.setState({ businessType: text })}
                    />
                    <Text style={styles.titleText}>{translations.address}</Text>
                    <CommonTextInput
                        textInputStyle={styles.textinput}
                        value={this.state.address}
                        onChangeText={(text) => this.setState({ address: text })}
                    />
                    <Text style={styles.titleText}>{translations.phone}</Text>
                    <CommonTextInput
                        textInputStyle={styles.textinput}
                        value={this.state.mobileNo}
                        onChangeText={(text) => {
                            if (this.validNumber(text)) {
                                this.setState({ mobileNo: text })
                            }
                        }
                        }
                        maxLength={12}
                        keyboardType="phone-pad"
                    />
                    <Text style={styles.titleText}>{translations.business_goals}</Text>
                    <CommonTextInput
                        textInputStyle={styles.textinput}
                        value={this.state.businessGoals}
                        onChangeText={(text) => this.setState({ businessGoals: text }, () => console.log("businessGoals", this.state.businessGoals))}
                    />
                    <MyCustomerButton
                        TouchableStyle={{ marginTop: hp(4.7) }}
                        Text={translations.Submit}
                        onPress={() => this.validation()}
                    />
                </View>


                </KeyboardAwareScrollView>
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
    textinputStyle: {
        marginHorizontal: wp(13)
    },
    titleText: {
        marginTop: hp(4.7),
        fontSize: FontSize.FontSize20,
        color: GColor.placeHolderGray
    },
    textinput: { marginLeft: wp(-3) }

})

