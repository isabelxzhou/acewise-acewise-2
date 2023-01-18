import React from 'react';
import { SafeAreaView, View, TouchableOpacity, Image, Text } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { WebView } from 'react-native-webview';
import images from '../../assets/images';
import GColor from '../../common/GColors';
import { CustomFont, FontSize } from '../../common/GConstant';

export default class TermPrivacy extends React.Component {
  
    componentDidMount = () => {
        this.props.navigation.setOptions({
          headerShown: true,
          headerTitle: () => (
            <Text style={{fontSize:FontSize.FontSize16,fontFamily:CustomFont.FontSemiBold,color:GColor.colorBlack}}>Term & Policy</Text>
          ),
          headerLeft: () => (
            <TouchableOpacity activeOpacity={1} 
            onPress={() => this.props.navigation.goBack()}
            >
              <Image source={images.Icon_header} />
            </TouchableOpacity>
          ),
        });
      }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1, backgroundColor: GColor.colorwhite }} >
          <WebView source={{ uri: 'https://www.figma.com/file/KprwYrnSeclH8KU9qACQU8/ACE-Mobile?node-id=1625%3A772' }} style={{ marginTop: hp(2) }} />
        </View>
      </View>
    )
  }
}