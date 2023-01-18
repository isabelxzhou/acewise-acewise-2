import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Financials from '../screens/FinancialScreens/Financials';
import ImageClick from '../screens/ImageClick';

const Stack = createNativeStackNavigator();

function FinancialStack() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        
        <Stack.Screen name="Financials" component={Financials} />
        {/* <Stack.Screen name="ImageClick" component={ImageClick} /> */}

      </Stack.Navigator>
  );
}

export default FinancialStack;