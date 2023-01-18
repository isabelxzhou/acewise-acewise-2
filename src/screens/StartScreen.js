import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { translations } from '../localize/translation';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { FontSize, showMsg } from '../common/GConstant';
import images from '../assets/images';
import GColor from '../common/GColors';
import SplashScreen from 'react-native-splash-screen';
import APIManagerTemp from '../APIManager/APIManagerTemp';
import { apiEndPoint, statusCode } from '../APIManager/ApiConstants';
import { clearAllAsyncData } from '../common/AsyncstorageFunction';
import { ForceLogout } from '../common/GCommonFunctions';

export default class StartScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {
        SplashScreen.hide();
    }

    apiCallLogout = async () => {
        let dictData = {

        };

        console.log("step 1 reach to function");
        APIManagerTemp.makePostRequest(
            apiEndPoint.logout,
            dictData,
            this.props,
            async (response) => {
                switch (response?.code) {
                    case statusCode.success:
                        showMsg(response.message);
                        this.props.navigation.popToTop()
                        ForceLogout(this.props);
                        clearAllAsyncData()
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

    logoutAsync = () => {
        this.props.navigation.popToTop()
                        ForceLogout(this.props);
                        clearAllAsyncData()
    }

    render() {
        return (
            <View style={{ backgroundColor: GColor.colorwhite, flex: 1 }}>
                <View style={styles.mainView}>
                    <Text style={styles.headerText}>{translations.StartScreenText}</Text>
                    <Image source={images.ace_log} resizeMode="center" style={{ marginTop: hp(4), width: "100%", height: "100%", }} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => this.props.navigation.navigate('DrawerNavigator')} title="View Grants" />
                    <Button onPress={() => this.apiCallLogout()} title="Logout" />
                </View>
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    mainView: {
        height: "65%",
        marginTop: hp(10),
        // backgroundColor:'red'
    },
    headerText: {
        fontSize: FontSize.FontSize28,
        textAlign: "center",
        //fontFamily: "poppins-semi-bold",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
})