
import React from 'react';
import {
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';import SplashScreen from 'react-native-splash-screen';
 import images from '../../assets/images';
import GColor from '../../common/GColors';
import { MyCustomerButton } from '../../common/GComponents';
import { CustomFont, FontSize } from '../../common/GConstant';
import { translations } from '../../localize/translation';

export default class WelcomeScreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
     
    }
  }

 
 
  render() {
    return(
      <View style={{flex:1,backgroundColor:GColor.colorwhite}}>
     <ImageBackground source={images.Welcome_bg} style={styles.ImageBgStyle}  >
        <View style={{flex:1}} >
        <Text style={styles.helpText}>{translations.helpAtFignerText}</Text>
       
        <View style={styles.centerBottumView}>
        <Image source={images.Welcome_logo} resizeMode="stretch" style={styles.centerImage} />
           <MyCustomerButton
           onPress= {() => {
               this.props.navigation.navigate("Login",{type : 'Signup'})
           }}
           textStyle ={{paddingHorizontal : wp(18)}}
           Text={translations.SignUp}
           />
            <MyCustomerButton
              onPress= {() => {
                this.props.navigation.navigate("Login",{type : 'Login'})
            }}
            TouchableStyle ={{marginTop:hp(2),backgroundColor : GColor.themeGray}}
           textStyle ={{paddingHorizontal : wp(18)}}
           Text={translations.LogIn}
           />
           <TouchableOpacity activeOpacity={0.7} 
           style={{marginVertical:hp(4),marginHorizontal:wp(15)}}
           onPress= {() => {
            this.props.navigation.navigate("Login",{type : 'Signup'})
        }}
           >
               <Image source={images.ButtonNextArrow} style={{alignSelf:'center' , }} />
           </TouchableOpacity>
            </View>
        </View>
     </ImageBackground>
     </View>
    )
  }
}

const styles = StyleSheet.create({
   
    helpText  : {
        fontSize:FontSize.FontSize32,
        marginLeft: wp(12.50),
        fontFamily: CustomFont.FontSemiBold,
        marginTop:hp(-10)
    },
    ImageBgStyle : {flex:1 , height:'100%',width:'100%',marginTop:hp(20),backgroundColor:GColor.colorwhite},
    centerBottumView :{position:'absolute',bottom:hp(2.5),alignSelf:'center'},
    centerImage :{ marginBottom:hp(8), alignSelf:"center",height:hp(26) , width:wp(64)},
})