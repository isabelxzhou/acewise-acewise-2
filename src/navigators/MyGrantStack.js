import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyGrant from '../screens/MyGrantScreens/MyGrant';
import UserDashBoardScreen from '../screens/GrantSearchScreens/UserDashBoardScreen';

const Stack = createNativeStackNavigator();

function MyGrantStack() {
  return (
      <Stack.Navigator
      initialRouteName="UserDashBoardScreen"
      screenOptions={{
        headerShown: false
      }}
      >
        {/* <Stack.Screen name="MyGrant" component={MyGrant} /> */}
        <Stack.Screen name="UserDashBoardScreen" component={UserDashBoardScreen} />
      </Stack.Navigator>
  );
}

export default MyGrantStack;