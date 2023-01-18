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
import TermPrivacy from '../screens/AuthanticationScreens/TermPrivacy';

const Stack = createNativeStackNavigator();



export const AuthStack = (props) => {
  
  return (
      // <NavigationContainer>
      <Stack.Navigator
      
      screenOptions={{
        headerShown: false,
      }}
      >
         <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="CreateAccount" component={CreateAccount} />
         <Stack.Screen name="TermPrivacy" component={TermPrivacy} />
        {/* <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
      </Stack.Navigator>
      // </NavigationContainer>
  );
}

// export default AuthStack;