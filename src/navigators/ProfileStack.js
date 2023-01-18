import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/ProfileScreens/Profile';

const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
  );
}

export default ProfileStack;