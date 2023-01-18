import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Homes from '../screens/HomeScreens/Homes';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        
        <Stack.Screen name="Homes" component={Homes} />
      </Stack.Navigator>
  );
}

export default HomeStack;