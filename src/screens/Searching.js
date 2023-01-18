import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, FlatList, Image, Modal } from "react-native";
import GColor from "../common/GColors";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { CustomFont, FontSize } from "../common/GConstant";
import { MyCustomerSearchBar } from "../common/GComponents";
import images from "../assets/images";
import SplashScreen from "react-native-splash-screen";
export default class Searching extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalVisible: false,
            arrSearchData: [
                {
                    title: 'state'
                },
                {
                    title: 'status'
                },
                {
                    title: 'private'
                },
                {
                    title: 'local'
                },
                {
                    title: 'agency'
                },
                {
                    title: 'instrument'
                },
                {
                    title: 'F18AS00003: Cooperative Agriculture Available, Federal, Fish and Wildlife, Cooperative Agreement'
                },
                {
                    title: 'F18AS00003: Cooperative Agriculture Available, Federal, Fish and Wildlife, Cooperative Agreement'
                },
            ],
        }
    }
    componentDidMount = () => {
        SplashScreen.hide()
    }



    renderSearchData = (item, index) => {
        return (
            <View style={styles.itemMainView}>
                <Text style={styles.descText}>{item.title}</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: GColor.colorwhite }}>
                <View style={{ marginHorizontal: wp(5) ,flex:1}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems:'center', marginRight: wp(5),marginTop:hp(5) }}>
                        <TouchableOpacity activeOpacity={0.8} style={{ marginTop: hp(1), backgroundColor: '#FFE8EC', height: hp(4.8), aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Image source={images.back_arrow_icon} />
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: wp(4), flex: 8, fontSize: FontSize.FontSize24,marginTop:hp(1) }}>Grant Search</Text>
                        <TouchableOpacity style={{  }}
                            onPress={() => this.setState({ isModalVisible: true })}
                        >
                            <Image source={images.option_icon} />
                        </TouchableOpacity>

                    </View>
                    <MyCustomerSearchBar
                    placeholderTextColor={GColor.colorBlack}
                        style={{ marginRight: wp(5) }}
                        placeholder="Search for grants"
                    />
                    <View style={{flex:1,marginTop:hp(3)}}>
                    <Text style={styles.searchByText}>Search By</Text>
                   
                        <FlatList
                        style={{marginTop:hp(3)}}
                            data={this.state.arrSearchData}
                            renderItem={({ item, index }) => this.renderSearchData(item, index)}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    itemMainView : {
        backgroundColor: "#E8EEF3",
        flex:1,
        marginBottom:hp(4),
        alignSelf:'flex-start',
        borderRadius:10
    },

    descText: {
        fontSize: FontSize.FontSize16,
        fontFamily: CustomFont.FontRegular,
        color: GColor.colorBlack,
        padding:hp(1.5),
      
    },
    searchByText : {
        fontSize: FontSize.FontSize16,
        fontFamily: CustomFont.FontRegular,
        color: GColor.colorBlack,
        
    }
})