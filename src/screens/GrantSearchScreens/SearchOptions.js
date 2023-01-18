import React from "react";
import { Text, View, StyleSheet, FlatList, Switch } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; 
import GColor from "../../common/GColors";
import { CustomFont, FontSize } from "../../common/GConstant";

export default class SearchOptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrSearchOptionData : [
                {
                    title : 'Restaurants Only',
                },
                {
                    title : 'Active Grants Only',
                },
                {
                    title : 'NYC-based Only',
                },
                {
                    title : '$10000+',
                },
            ]
        }
    }

    renderSearchOptionData = (item , index) => {
        return(
            <View style={styles.listItem}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Switch 
                style={{marginTop:hp(1),alignSelf:'flex-start' }} 
                />
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: GColor.colorwhite }}>
                <Text style={styles.title}>Search options</Text>
                <FlatList
                    style={{marginLeft:wp(5),marginTop:hp(5)}}
                    data={this.state.arrSearchOptionData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item , index }) => {
                        return this.renderSearchOptionData(item , index);
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        marginTop: hp(1.5),
        textAlign: "center",
        fontFamily: CustomFont.FontSemiBold,
        // fontFamily: "poppins-semi-bold",
        fontSize: FontSize.FontSize28,
    },
    itemTitle : {
        marginTop: hp(1.5),
       // textAlign: "center",
        fontFamily: CustomFont.FontSemiBold,
        fontSize: FontSize.FontSize18,
    },
    listItem: {
       marginBottom:hp(5),
      },
})