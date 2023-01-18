import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import GColor, { GColors } from "../common/GColors";

export default class DrawerContent extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogoutVisible: false,
      userInfo: {},
      profile_image: "",
      curr_index : 0,
      arrDrawerItems : [
        {
          title : '-',
        },
        {
          title : 'Grant Search',
        },
        {
          title : 'My Grants',
        },
        {
          title : 'Search Settings',
        },
      ]
    };
  }

 renderDrawerItem = (item , index) => {
   return(
    <TouchableOpacity
    style={[styles.drawerTextView , {backgroundColor: this.state.curr_index == index ? GColor.lightBlue : null}]}
    onPress={() => {
     // alert("press")
     this.setState({curr_index : index} ,() => {
      this.handleDrawerItemPress(item , index)
     })
      
    }}
  >
   <Text style={[styles.DrawerText , {color : this.state.curr_index == index ? GColor.drawerText : null}]}>{item.title}</Text>
  </TouchableOpacity>
   )
 }

 handleDrawerItemPress = (item , index) => {
    if(item.title == '-'){
      this.props.navigation.navigate("GrantSearch");
    }
    else if(item.title == 'Grant Search'){
      this.props.navigation.navigate("GrantSearch");
    }
    else if(item.title == 'My Grants'){
      this.props.navigation.navigate("UserDashBoardScreen");
    }
    else if(item.title == 'Search Settings'){
      this.props.navigation.navigate("SearchOptions");
    }
 }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: GColor.colorwhite }}>
      
        <View
          style={{
            
            marginHorizontal: wp(2),
          }}
        >
          <FlatList
          data={this.state.arrDrawerItems}
          renderItem={({item , index}) => this.renderDrawerItem(item , index)}
          />
          {/* <TouchableOpacity
            style={styles.drawerTextView}
            onPress={() => {
             // alert("press")
              this.props.navigation.navigate("GrantSearch");
            }}
          >
           <Text style={styles.DrawerText}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.drawerTextView}
            onPress={() => {
             // alert("press")
              this.props.navigation.navigate("GrantSearch");
            }}
          >
           <Text style={styles.DrawerText}>Grant Search</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.drawerTextView}
            onPress={() => {
             // alert("press")
              this.props.navigation.navigate("UserDashBoardScreen");
            }}
          >
           <Text style={styles.DrawerText}>My Grants</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.drawerTextView}
            onPress={() => {
             // alert("press")
              this.props.navigation.navigate("SearchOptions");
            }}
          >
           <Text style={styles.DrawerText}>Search Settings</Text>
          </TouchableOpacity> */}

        </View>
       
       
        
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  userNameText: {
   
    color: GColor.colorwhite,
  },
  userNumberText: {
   
    color: GColor.colorwhite,
   
  },
  drawerTextView : {
    marginTop:hp(1),
    marginLeft:wp(2),
    borderRadius: 5
  },
  DrawerText : {paddingVertical:hp(2),marginLeft:wp(3)}
});