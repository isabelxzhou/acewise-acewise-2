import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import SettingStack from './SettingStack';
import { Image, StyleSheet, Text, View } from 'react-native';
import images from '../assets/images';
import ProfileStack from './ProfileStack';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; 
import FinancialStack from './FinancialStack';
import { CustomFont, FontSize } from '../common/GConstant';

const Tab = createBottomTabNavigator();

export const  BottumTabNavigater = () => {
    return (
      <Tab.Navigator  
        screenOptions={{
        //  tabBarActiveTintColor: '#e91e63',
          headerShown:false,
          tabBarStyle:{
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            height:hp(12),
           // backgroundColor:"orange",
            position: 'absolute',
            overflow:'hidden',
            
            shadowRadius: hp(3),
            shadowOffset: { height: 10, width: 20 },
            shadowOpacity: 0.8,
            //shadowColor: 'red',
            elivation: 5,
            
          }
        }}
        
      >
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size ,focused}) => (
                focused ? (
              <View style={styles.selectedImage}>
                  <Image source={ images.Home} />
                  <Image source ={images.Home_bottum} style={{marginTop:hp(2)}} />
              </View> ):
             ( <View style={{alignItems:'center',justifyContent:'center'}}>
               <Image source={images.Home_unselected} style={styles.unselectedImage}/>
               <Text style={styles.unselectedText}>Home</Text>
             </View> )
            ),
          }}
        />
        <Tab.Screen
          name="FinancialStack"
          component={FinancialStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size ,focused }) => (
                focused ? (
                    <View style={styles.selectedImage}>
                        <Image source={ images.chat} />
                        <Image source ={images.Home_bottum} style={{marginTop:hp(2)}} />
                    </View> ):
                     ( <View style={{alignItems:'center',justifyContent:'center'}}>
                     <Image source={images.chat_unselected} style={styles.unselectedImage}/>
                     <Text style={styles.unselectedText}>Financials</Text>
                   </View> )
                   
                  ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ color, size ,focused }) => (
                focused ? (
                    <View style={styles.selectedImage}>
                        <Image source={ images.Home} />
                        <Image source ={images.Home_bottum} style={{marginTop:hp(2)}} />
                    </View> ):
                     ( <View style={{alignItems:'center',justifyContent:'center'}}>
                     <Image source={images.Profile_unselected} style={styles.unselectedImage}/>
                     <Text style={styles.unselectedText}>Profile</Text>
                   </View> )
                  ),
          }}
        />
          <Tab.Screen
          name="SettingStack"
          component={SettingStack}
          options={{
            tabBarLabel: '',
            // tabBarIcon: ({ color, size ,focused }) => (
            //     <Image source={focused ? images.Setting_unselected : images.Setting_unselected} />
            // ),
            tabBarIcon: ({ color, size ,focused }) => (
                focused ? (
                    <View style={styles.selectedImage}>
                        <Image source={ images.Home} />
                        <Image source ={images.Home_bottum} style={{marginTop:hp(2)}} />
                    </View> ):
                    ( <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Image source={images.Setting_unselected} style={styles.unselectedImage}/>
                    <Text style={styles.unselectedText}>Setting</Text>
                  </View> )
                  ),
          }}
        />
      </Tab.Navigator>
    );
  }

  const styles = StyleSheet.create({
      selectedImage : {alignItems:'center',marginTop:hp(3)},
      unselectedImage : {marginTop:hp(3),},
      unselectedText : {
        fontSize:FontSize.FontSize12,
        fontFamily:CustomFont.FontRegular,
        color:'#A8A8AA',
        marginTop:hp(0.5)
      }
  })