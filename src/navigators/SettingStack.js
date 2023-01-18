import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Setting from '../screens/SettingScreens/Setting';

const Stack = createNativeStackNavigator();

function SettingStack() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        
        <Stack.Screen name="Settings" component={Setting} />
      </Stack.Navigator>
  );
}

export default SettingStack;