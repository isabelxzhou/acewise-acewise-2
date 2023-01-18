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
export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrPopularData: [
                {
                    title: 'Social Media Growth',
                    disc: '30 tips for growing your social media account'
                },
                {
                    title: 'Grant Growth Seach',
                    disc: '30 tips for growing your social media account'
                },
                {
                    title: 'Grant Growth Seach',
                    disc: '30 tips for growing your social media account'
                },
                {
                    title: 'Grant Growth Seach',
                    disc: '30 tips for growing your social media account'
                },
                {
                    title: 'Grant Growth Seach',
                    disc: '30 tips for growing your social media account'
                },
                {
                    title: 'Grant Growth Seach',
                    disc: '30 tips for growing your social media account'
                },

            ],
            arrSearchData: [
                {
                    title: 'Grant Search ',
                    disc: 'A comprehensive grant searching solution'
                },
                {
                    title: 'Grant Search ',
                    disc: 'A comprehensive grant searching solution'
                },
            ],
            arrOptionData: [
                {
                    title: 'Home'
                },
                {
                    title: 'Solutions'
                },
                {
                    title: 'Resources'
                },
                {
                    title: 'About Us'
                },
            ],
            isModalVisible: false,
        }
    }

    componentDidMount = () => {
        SplashScreen.hide()
    }

    renderPopularData = (item, index) => {
        return (
            <TouchableOpacity style={styles.itemMainView} activeOpacity={1}
            onPress={() => this.props.navigation.navigate("GuideDetails",{disc : item.disc , title : item.title})}
            >
                {/* <View style={{height:hp(35) , backgroundColor:'red'}} ></View> */}
                <Image source={images.dummy_violin_image} style={{ borderTopRightRadius: 16, borderTopLeftRadius: 16 }} />
                <View style={{ marginHorizontal: wp(5), marginVertical: hp(2.4) }}>
                    <Text style={styles.descText} >{item.disc}</Text>
                    <Text style={styles.titleText}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    renderSearchData = (item, index) => {
        return (
            <View style={styles.itemSearchView}>
                <View style={{ marginHorizontal: wp(4.26), marginVertical: hp(2) }} >
                    <Text style={styles.descText}>{item.disc}</Text>
                    <Text style={styles.titleText}>{item.title}</Text>
                </View>
            </View>
        )
    }

    renderItemData = (item, index) => {
        return (
            <TouchableOpacity style={{ marginVertical: hp(2), alignItems: 'center', justifyContent: 'center' }} activeOpacity={0.8}
                onPress={() => this.setState({ isModalVisible: false })}
            >
                <Text style={styles.optionText}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: GColor.colorwhite }}>
                <View style={{ marginLeft: wp(5) }}>
                    <View style={{ flexDirection: 'row', marginTop: hp(5), justifyContent: 'space-between', marginRight: wp(5) }}>
                        <TouchableOpacity activeOpacity={0.8} style={{ marginTop: hp(1), backgroundColor: '#FFE8EC', height: hp(4.8), aspectRatio: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
                            <Image source={images.back_arrow_icon} />
                        </TouchableOpacity>
                        <Text style={{ marginHorizontal: wp(4), flex: 8, fontSize: FontSize.FontSize24 }}>Hi,What would you like help with?</Text>
                        <TouchableOpacity style={{ marginTop: hp(3) }}
                            onPress={() => this.setState({ isModalVisible: true })}
                        >
                            <Image source={images.option_icon} />
                        </TouchableOpacity>
                    </View>
                    <MyCustomerSearchBar
                        style={{ marginRight: wp(5) }}
                        placeholder="Search articles"
                    />
                    <Text style={styles.popularText}>Popular Guides</Text>
                    <FlatList
                        style={{ marginTop: hp(3) }}
                        data={this.state.arrPopularData}
                        renderItem={({ item, index }) => this.renderPopularData(item, index)}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                    />
                    <Text style={styles.popularText}>Serach for Grants</Text>
                    <FlatList
                        style={{ marginTop: hp(3) }}
                        data={this.state.arrSearchData}
                        renderItem={({ item, index }) => this.renderSearchData(item, index)}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        bounces={false}
                    />
                </View>
                <Modal visible={this.state.isModalVisible} transparent={true} >
                    <View style={{ flex: 1, backgroundColor: '#E8EEF3', alignSelf: 'flex-end' }}>
                        <View style={{ marginTop: hp(9), marginHorizontal: wp(15) }}>
                            <FlatList
                                data={this.state.arrOptionData}
                                renderItem={({ item, index }) => this.renderItemData(item, index)}
                            />
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    popularText: {
        marginTop: hp(2),
        fontSize: FontSize.FontSize20,
        fontFamily: CustomFont.FontSemiBold
    },
    descText: {
        fontSize: FontSize.FontSize12,
        fontFamily: CustomFont.FontRegular,
        color: '#656F77'

    },
    titleText: {
        fontSize: FontSize.FontSize24,
        fontFamily: CustomFont.FontSemiBold,
        color: GColor.colorBlack

    },
    itemMainView: {
        marginRight: wp(4),
        marginLeft: wp(1),
        width: wp(65),
        //  backgroundColor:'red',
        borderRadius: 16,
        backgroundColor: GColor.colorwhite,
        shadowOpacity: 0.5,
        shadowColor: GColor.themeGray,
        shadowOffset: { width: 5, height: 5 },
        elevation: 5,
        marginBottom: hp(2),
    },
    itemSearchView: {
        width: wp(56),
        shadowOpacity: 0.5,
        borderRadius: 16,
        shadowColor: GColor.themeGray,
        shadowOffset: { width: 5, height: 5 },
        elevation: 5,
        marginBottom: hp(2),
        backgroundColor: GColor.colorwhite,
        marginRight: wp(3),
        marginLeft: wp(1)
    },
    optionText: {
        fontSize: FontSize.FontSize22,
        //fontFamily:CustomFont.FontSemiBold
    }
})