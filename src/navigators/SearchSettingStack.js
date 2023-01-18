import  React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchSetting from '../screens/SearchSettingScreens/SearchSetting';
import SearchOptions from '../screens/GrantSearchScreens/SearchOptions';

const Stack = createNativeStackNavigator();

function SearchSettingStack() {
  return (
      <Stack.Navigator
      initialRouteName="SearchOptions"
      screenOptions={{
        headerShown: false
      }}
      >
        {/* <Stack.Screen name="SearchSetting" component={SearchSetting} /> */}
        <Stack.Screen name="SearchOptions" component={SearchOptions} />

      </Stack.Navigator>
  );
}

export default SearchSettingStack;