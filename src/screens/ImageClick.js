
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
import GColor from '../common/GColors';

import ImagePicker from "react-native-image-crop-picker";
import { PickerModal } from '../common/PickerModal';
import { CheckPermission } from '../common/CheckPermission';
import { galleryPermission, galleryPermissionMsg , cameraPermission , cameraPermissionMsg, FontSize, CustomFont} from '../common/GConstant';
import images from '../assets/images';

export default class ImageClick extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        productImage : false,
        imageUrl : null,
    }
  }


  componentDidMount = () => {
    this.props.navigation.setOptions({
      headerShown: true,
      headerBackVisible : false,
     // headerTintColor: 'red',
     headerTitleAlign: 'center',
     headerLeft: () => (
      <TouchableOpacity activeOpacity={1} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
      onPress={() => this.props.navigation.goBack()}
      >
        <Image source={images.Icon_header} />
      </TouchableOpacity>
    ),
      headerTitle: () => (
        <Text style={styles.headerText}>Upload Image</Text>
      ),
      headerRight: () =>  <View/>
    
    });
  }


  checking = (type) => {
    CheckPermission(
      () => this.setState({ productImage: false }),
      type == 1 ? cameraPermission : galleryPermission  ,
      type == 1 ? cameraPermissionMsg :  galleryPermissionMsg,
      () => {
        this.ShowImage(type)
      }
    );
  }

  ShowImage = (type) => {

    if (type == 1) {
      console.log("camera");
      ImagePicker.openCamera({
        cropping:true
      }).then((image) => {
       console.log("image from camera",image.path);
       this.setState({  imageUrl :image.path , productImage : false })
      });
    } else if (type == 2) {
      console.log("gallery");

      ImagePicker.openPicker({
        cropping:true
      }).then((image) => {
        console.log("image from gallery  ==>",image.path);
        this.setState({  imageUrl :image.path , productImage : false })
      
      });
    }
  };
 
  render() {
    return(
     <View style={{flex:1,backgroundColor:GColor.colorwhite}}>
         <View style={{marginHorizontal:wp(4)}}>
         <View activeOpacity={0.8} style={styles.imageView}>
        <Image source={{uri:this.state.imageUrl}} style={{height:'100%',width:'100%'}} resizeMode="stretch" />
         </View>
         <TouchableOpacity activeOpacity={0.8}
         style={styles.btnView}
        onPress={() => this.setState({productImage : true})}
         >
             <Text style={styles.btnText}>Upload Image</Text>
         </TouchableOpacity>
         </View>
         <PickerModal
          visible={this.state.productImage}
          cancelPress={() => this.setState({ productImage: false })}
          galleryPress={() => {
              this.checking(2)
          }}
          cameraPress={() => 
            this.checking(1)
        }
        />
     </View>
    )
  }
}

const styles = StyleSheet.create({
   imageView : {marginTop:hp(14),borderWidth:2,borderColor:'#BDBDBD',height:hp(45),backgroundColor:'#F1F1F1'},
    btnView : {backgroundColor:GColor.themeBlue, height:hp(7),borderRadius:18,alignItems:'center',justifyContent:'center',marginTop:hp(2)},
    btnText : {
        fontWeight:'700',
        fontSize:FontSize.FontSize16,
        color:GColor.colorwhite,
        fontFamily:CustomFont.FontSemiBold
    },
    headerText : {
      fontSize:FontSize.FontSize16,
      fontFamily:CustomFont.FontSemiBold,
      color:GColor.colorBlack,
    }
   
})