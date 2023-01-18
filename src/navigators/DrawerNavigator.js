import 'react-native-gesture-handler';
import * as React from 'react';
import { Pressable, View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import GrantSearchStack from './GrantSearchStack';
import MyGrantStack from './MyGrantStack';
import SearchSettingStack from './SearchSettingStack';
import { BottumTabNavigater } from './BottumTabNavigater';

const Drawer = createDrawerNavigator();
const showDrawer = false;

function DrawerNavigator(props) {
    return (
      //  <NavigationContainer>
        <Drawer.Navigator
        screenOptions={{
          headerShown:false
        }}
       // useLegacyImplementation={false}
       // drawerContent={(props) => <CustomDrawerContent {...props} />}
       // drawerContent={(props) => <CustomDrawerContent {...props}/>}
        >
          <Drawer.Screen  name='BottumTabNavigater' options={{title: '',}}  component={BottumTabNavigater} />
          <Drawer.Screen
         
          name="-" component={GrantSearchStack}  />
          <Drawer.Screen name="Grant Search" component={GrantSearchStack}  />
          <Drawer.Screen name="My Grants" component={MyGrantStack} />
          <Drawer.Screen name="Search Settings" component={SearchSettingStack} />
        </Drawer.Navigator>
      // </NavigationContainer>
    );
  }

  export default DrawerNavigator;


// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { StyleSheet, View,  } from "react-native";
// import React from "react";

// import DrawerContent from "./DrawerContent";
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from "react-native-responsive-screen";
// import GrantSearch from '../screens/GrantSearchScreens/GrantSearch';
// import GColor from "../common/GColors";
// import GranchSearchDetails from "../screens/GrantSearchScreens/GranchSearchDetails";
// import SearchOptions from '../screens/GrantSearchScreens/SearchOptions';
// import WebLoaderScreen from '../screens/GrantSearchScreens/WebLoaderScreen';
// import UserDashBoardScreen from '../screens/GrantSearchScreens/UserDashBoardScreen';
// /*  */
// const Drawer = createDrawerNavigator(); /*  */



// export default Drwer = () => {
  
//   return (
//     <View style={{ flex: 1 }}>
//       <Drawer.Navigator
//       useLegacyImplementation={false}
//         drawerStyle={styles.drawerStyles}
//         contentContainerStyle={{ flex: 1 }}
        
//         //  contentContainerStyle={{ flex: 1 }}
//         sceneContainerStyle={{ backgroundColor: GColor.colorwhite }}
//         drawerContent={(props) => {
         
//           return <DrawerContent {...props} />;
//         }}
//       >
//          <Drawer.Screen name="GrantSearch" component={GrantSearch}  />
//          <Drawer.Screen name="GranchSearchDetails" component={GranchSearchDetails} />
//         <Drawer.Screen name="SearchOptions" component={SearchOptions} />
//         <Drawer.Screen name="WebLoaderScreen" component={WebLoaderScreen} />
//         <Drawer.Screen name="UserDashBoardScreen" component={UserDashBoardScreen} />
        
//       </Drawer.Navigator>
//     </View>
//   );
// };



// const styles = StyleSheet.create({
//   drawerStyle: {
//     width: "100%",
//   },
//   drawerStyles: { flex: 1, width: "66%" },
// });