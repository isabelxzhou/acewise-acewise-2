import  React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from '../screens/StartScreen';
import DrawerNavigator from './DrawerNavigator';
import WelcomeScreen from '../screens/AuthanticationScreens/WelcomeScreen';
import Login from '../screens/AuthanticationScreens/Login';
import CreateAccount from '../screens/AuthanticationScreens/CreateAccount';
import { asyncStorageKeys, getAsyncData } from '../common/AsyncstorageFunction';
import Home from '../screens/Home';
import GuideDetails from '../screens/GuideDetails';
import Searching from '../screens/Searching';
import ImageClick from '../screens/ImageClick';

const Stack = createNativeStackNavigator();



export const MainStack = () => {
  
  return (
      // <NavigationContainer>
      <Stack.Navigator
     // initialRouteName="ImageClick"
      screenOptions={{
         headerShown: false
      }}
      >
        
        {/* <Stack.Screen name="StartScreen" component={StartScreen} /> */}
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="GuideDetails" component={GuideDetails} />
        <Stack.Screen name="Searching" component={Searching} />
        <Stack.Screen name="ImageClick" component={ImageClick} />
      </Stack.Navigator>
      // </NavigationContainer>
  );
}

// export default AuthStack;