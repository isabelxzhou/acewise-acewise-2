import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator, Image } from "react-native";
import GColor from "./GColors";


export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return this.state.loading ? (
      <View style={styles.vwMain}>
        <View style={styles.vwWhite}>
          <ActivityIndicator size="large" color={GColor.themeBlue} />
          {/* <Image
              style = {styles.imgLoader}
              source = {image.loader}
            /> */}
        </View>
      </View>
    ) : null;
  }

  toggleLoader(shouldShow) {
    this.setState({ loading: shouldShow });
  }
}

const styles = StyleSheet.create({
  // View Style
  vwMain: {
    backgroundColor: "rgba(0,0,0,0.3)",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  vwWhite: {
    backgroundColor: GColor.colorwhite,
    borderRadius: 10,
    height: 80,
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  imgLoader: {
    backgroundColor: GColor.colorwhite,
    borderRadius: 12,
    height: 140,
    width: 140,
  },
});