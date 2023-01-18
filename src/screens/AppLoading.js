import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from 'react-native-flash-message';
import React from "react";
import {AuthStack} from "./src/navigators/AuthStack";
import { View } from "react-native";
import { MainStack } from "./src/navigators/MainStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { asyncStorageKeys, getAsyncData } from "../common/AsyncstorageFunction";
import { CommonActions } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
export default class AppLoading extends React.Component {

    componentDidMount = () => {
        getAsyncData(asyncStorageKeys.isuserLogin, (value) => {
            if (value == "true") {
              console.log("Value" , value)
             // this.props.navigation.navigate("DrawerNavigator")
             // this.props.navigation.navigate("MainStack")
             this.navigationSceens('MainStack')
            } else {
              console.log("Value" , value)
             // this.props.navigation.navigate("AuthStack")
             this.navigationSceens('AuthStack')
            }
          })
    }

    navigationSceens = (screen) => {
      this.props.navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            { name: screen },
          ],
        })
      );
    }

  render() {
    return (
      <View />
    )
  }
}