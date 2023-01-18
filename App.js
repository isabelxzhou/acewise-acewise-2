import { NavigationContainer } from "@react-navigation/native";
import FlashMessage from 'react-native-flash-message';
import React from "react";
import {AuthStack} from "./src/navigators/AuthStack";
import { View } from "react-native";
import { MainStack } from "./src/navigators/MainStack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppLoading from "./src/screens/AppLoading";
import DrawerNavigator from "./src/navigators/DrawerNavigator";
import SplashScreen from "react-native-splash-screen";
import Loader from "./src/common/Loader";
import { setLoaderRef } from "./src/common/GFunction";
const Stack = createNativeStackNavigator();
export default class App extends React.Component {


  componentDidMount = () => {
    setTimeout(() => SplashScreen.hide() , 1000);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          {/* <AuthStack /> */}
          <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="AppLoading" component={AppLoading} />
        
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={MainStack} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      </Stack.Navigator>
        </NavigationContainer>
        <FlashMessage position="top" />
        <Loader ref={(ref) => setLoaderRef(ref)} />
      </View>
    )
  }
}