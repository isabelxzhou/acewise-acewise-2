
import React from 'react';
import {
  Button,
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
} from 'react-native-responsive-screen'; import images from '../../assets/images';
import { FontSize } from '../../common/GConstant';

export default class GranchSearchDetails extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      titleText : ''
    }
  }

  componentDidMount = () => {
    this.setState({titleText : this.props.route.params.title},() => console.log('this.props.route.params.title =>' ,this.state.titleText))
  }

  render() {
    return(
      <View style={{flex:1 , backgroundColor:'white',}}>
        <View style={{marginHorizontal:wp(5),flex:1}}>
        <View style={{height: "40%",marginTop:hp(15)}}>
          <ImageBackground
          source={images.bg_16}
          resizeMode="contain"
          style={{ alignItems:'center',}}
          >
          <Text style={styles.header} >{this.props.route.params.title}</Text>
            </ImageBackground>
        
        </View>
      <View style={{flex:1}}>
      <Text style={styles.header} >Application Open Wed Jul 01 2020</Text>
        <Text style={styles.amount}>{this.props.route.params.amount} Available</Text>
      </View>

      <View style={styles.btnMainView}>
        <Button
        title="SAVE"
       // onPress={() => alert("save")}
        />
        <Button
        onPress={() => this.props.navigation.navigate("WebLoaderScreen",{title : this.state.titleText })}
        title="Apply"
        />
      </View>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header : {
    marginTop: hp(1.5),
    textAlign: "center",
   // fontFamily: "poppins-semi-bold",
    fontSize: FontSize.FontSize26,
  },
  amount : {
    marginTop: hp(2.5),
    textAlign: "center",
   // fontFamily: "poppins-semi-bold",
    fontSize: FontSize.FontSize15,
  },
  btnMainView : {
  marginBottom:hp(5),
    marginHorizontal:wp(15),
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  }
})