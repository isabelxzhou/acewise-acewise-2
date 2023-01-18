import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Image } from 'react-native';
import { Colors } from "@constants";
import { getHeight } from '../Common/GConstants';
import { image } from '../Assets/Images';
import GColor from '../common/GColors';

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
        this.state.loading ? 
      <View
        style={styles.vwMain}>
        <View style={styles.vwWhite}>
            <ActivityIndicator
                size="large"
                color={GColor.themeBlue} 
            />
            {/* <Image
              style = {styles.imgLoader}
              source = {image.loader}
            /> */}
        </View>
      </View> : null
    );
  }

  toggleLoader(shouldShow) {
    this.setState({ loading: shouldShow });
  }
}

const styles = StyleSheet.create({
    // View Style
    vwMain: {
        backgroundColor: GColor.colorBlack,
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    vwWhite: {
      backgroundColor: GColor.colorwhite,
      borderRadius: getHeight(10),
      height: getHeight(80),
      width: getHeight(80),
      alignItems: 'center',
      justifyContent:'center'
    },
    imgLoader: {
      backgroundColor: GColor.colorwhite,
      borderRadius: getHeight(12),
      height: getHeight(140),
      width: getHeight(140),
    }
});