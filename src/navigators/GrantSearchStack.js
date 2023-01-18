import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GrantSearch from '../screens/GrantSearchScreens/GrantSearch';
import GranchSearchDetails from '../screens/GrantSearchScreens/GranchSearchDetails';
import SearchOptions from '../screens/GrantSearchScreens/SearchOptions';
import WebLoaderScreen from '../screens/GrantSearchScreens/WebLoaderScreen';
import UserDashBoardScreen from '../screens/GrantSearchScreens/UserDashBoardScreen';

const Stack = createNativeStackNavigator();

function GrantSearchStack() {
  return (
      <Stack.Navigator
      initialRouteName="GrantSearch"
      screenOptions={{
        headerShown: false
      }}
      >
        <Stack.Screen name="GrantSearch" component={GrantSearch} />
        <Stack.Screen name="GranchSearchDetails" component={GranchSearchDetails} />
        <Stack.Screen name="SearchOptions" component={SearchOptions} />
        <Stack.Screen name="WebLoaderScreen" component={WebLoaderScreen} />
        <Stack.Screen name="UserDashBoardScreen" component={UserDashBoardScreen} />
      </Stack.Navigator>
  );
}

export default GrantSearchStack;