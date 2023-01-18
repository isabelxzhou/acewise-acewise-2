import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, FlatList, ImageBackground, Modal, Platform, SafeAreaView } from 'react-native';
import images from '../../assets/images';
import { CustomCreditInput, CustomeHeader, CustomInput, MyCustomerButton, MyCustomerSearchBar } from '../../common/GComponents';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { CustomFont, FontSize, getHeight, getWidth } from '../../common/GConstant';
import GColor from '../../common/GColors';

export default class Homes extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            isSuggestionShow : true,
            isFilterVisible: false,
            arrHomeHorizonData: [
                {
                    method: 'Google',
                    title: 'Create Google Profile',
                    increase: '$1000/m'
                },
                {
                    method: 'Shopify',
                    title: 'Senior UI Designer',
                    increase: '$2500/m'
                },
            ],
            arrHomeVerticalData: [
                {
                    title: 'Grant',
                    desc: 'For Non-profits',
                    price: '$4500'
                },
                {
                    title: 'Grant',
                    desc: 'Small Business Grant',
                    price: '$4500'
                },
                {
                    title: 'Grant',
                    desc: 'Government Grant',
                    price: '$4500'
                },
                {
                    title: 'Grant',
                    desc: 'Government Grant',
                    price: '$4500'
                },
                {
                    title: 'Grant',
                    desc: 'Government Grant',
                    price: '$4500'
                },
            ],
            arrEligibilityData: [
                {
                    amount: 'Full Eligibility',

                },
                {
                    amount: 'Over 80%',

                },
                {
                    amount: 'Over 50%',

                },
                {
                    amount: 'Any',

                },
            ],
            isCategotyVisible: false,
            category: '',
            arrCategotyData: [
                {
                    categoryValue: 'cat 1'
                },
                {
                    categoryValue: 'cat 2'
                },
                {
                    categoryValue: 'cat 3'
                },
            ],
            isSubCategotyVisible: false,
            subCategory: '',
            arrSubCategotyData: [
                {
                    subCategoryValue: 'subcat 1'
                },
                {
                    subCategoryValue: 'subcat 2'
                },
                {
                    subCategoryValue: 'subcat 3'
                },
            ],
            isAmountVisible: false,
            amount: '',
            arrAmountData: [
                {
                    amount: '$2k-$5k'
                },
                {
                    amount: '$6k-$10k'
                },
                {
                    amount: '$10k-$15k'
                },
            ],
        }
    }

    componentDidMount = () => {
        this.props.navigation.setOptions({
          headerShown: true,
          header : () => (
              <CustomeHeader 
              onPress={() => this.props.navigation.openDrawer()} 
              profileImage={images.profile_icon}
              />
          ),
        });
      }

    renderHorizontalData = (item, index) => {
        return (
            <View style={styles.itemMainView}>
                <View style={{ marginHorizontal: wp(4), marginTop: hp(2) }}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Image source={images.Google} />
                            <Text style={styles.itemMethodText}>{item.method}</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.8} style={{ marginBottom: wp(5), marginRight: wp(3) }}
                            onPress={() => {
                                this.state.arrHomeHorizonData[index].isSelected = !this.state.arrHomeHorizonData[index].isSelected
                                this.setState({ arrHomeHorizonData: this.state.arrHomeHorizonData })
                            }}
                        >
                            <Image source={images.heart_selected} style={{ tintColor: item.isSelected ? null : GColor.lightGray }} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.itemtitle}>{item.title}</Text>
                    <Text style={styles.itemIncrease}>{item.increase}    <Text style={styles.predictText}>predicted increase</Text> </Text>
                </View>
            </View>
        )
    }

    renderVerticalData = (item, index) => {
        return (
            <View style={styles.itemVerticalView}>
                <View style={{ height: hp(7.5), width: wp(13), aspectRatio: 1 / 1, backgroundColor: 'red', marginVertical: hp(2), marginLeft: wp(5), borderRadius: 15 }}>

                </View>
                <View style={{ marginLeft: wp(4), flex: 1 }}>
                    <Text style={styles.itemHeader}>{item.title}</Text>
                    <Text style={styles.itemDescPrice}>{item.desc}</Text>
                </View>
                <Text style={[styles.itemDescPrice, { marginRight: wp(8) }]} >{item.price}</Text>
            </View>
        )
    }

    renderEligibilityData = (item, index) => {
        return (
            <TouchableOpacity style={[styles.eligibilityItemView, {
                backgroundColor: item.isSelected ? GColor.themeBlue : GColor.colorwhite,
                borderColor: item.isSelected ? null : GColor.themeBlue,
                borderWidth: item.isSelected ? 0 : 0.5
            }]}
                activeOpacity={0.8}
                onPress={() => {
                    this.state.arrEligibilityData[index].isSelected = !this.state.arrEligibilityData[index].isSelected
                    this.setState({ arrEligibilityData: this.state.arrEligibilityData }, () => {
                        console.log("arr", this.state.arrEligibilityData)
                    })
                }}
            >
                <Text style={[styles.eligibilityItemText, { color: item.isSelected ? GColor.colorwhite : '#6A6A6A' }]}>{item.amount}</Text>
            </TouchableOpacity>
        )
    }

    renderCategoryData = (item, index) => {
        return (
            <TouchableOpacity style={{ backgroundColor: GColor.colorwhite, borderColor: 'gray' }} activeOpacity={1}
                onPress={() => this.setState({ isCategotyVisible: false, category: item.categoryValue })}
            >
                <Text style={styles.itemCategotyText}>{item.categoryValue}</Text>
            </TouchableOpacity>
        )
    }

    renderSubCategoryData = (item, index) => {
        return (
            <TouchableOpacity style={{ backgroundColor: GColor.colorwhite, borderColor: 'gray' }} activeOpacity={1}
                onPress={() => this.setState({ isSubCategotyVisible: false, subCategory: item.subCategoryValue })}
            >
                <Text style={styles.itemCategotyText}>{item.subCategoryValue}</Text>
            </TouchableOpacity>
        )
    }
    renderAmountData = (item, index) => {
        return (
            <TouchableOpacity style={{ backgroundColor: GColor.colorwhite, borderColor: 'gray' }} activeOpacity={1}
                onPress={() => this.setState({ isAmountVisible: false, amount: item.amount })}
            >
                <Text style={[styles.itemCategotyText, { marginLeft: getWidth(100) }]}>{item.amount}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
            <ImageBackground style={{ flex: 1 }} source={images.Home_bg} >
                <View style={{ marginLeft: wp(5), flex: 1, marginBottom: hp(9) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: getHeight(30), marginRight: wp(5) }}>
                        <View style={styles.TextInputEditView}>
                            <TextInput
                                placeholderTextColor="#6A6A6A"
                                style={styles.textinput}
                                placeholder="Serach here..."
                                value={this.state.searchText}
                                onChangeText={(text) => this.setState({ searchText: text })}
                            />
                        </View>
                        <TouchableOpacity activeOpacity={0.8}
                            onPress={() => {
                                this.setState({ isFilterVisible: true })
                            }}
                        >
                            <Image source={images.filter_icon} />
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.isSuggestionShow ?
                        <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(1), marginRight: wp(5.33) }}>
                        <Text style={styles.suggestionText}>Suggestions For You</Text>
                        <Text style={styles.showAllText}>Show All</Text>
                    </View>

                
                  
                    <FlatList
                        style={{ marginTop: hp(2), }}
                        data={this.state.arrHomeHorizonData}
                        renderItem={({ item, index }) => this.renderHorizontalData(item, index)}
                        horizontal
                        bounces={false}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>  : null
                    }

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: hp(1), marginRight: wp(5.33) }}>
                        <Text style={styles.suggestionText}>Grants</Text>
                        <Text style={styles.showAllText}>Show All</Text>
                    </View>

                    <FlatList
                        style={{ marginTop: hp(2) }}
                        data={this.state.arrHomeVerticalData}
                        renderItem={({ item, index }) => this.renderVerticalData(item, index)}
                        bounces={false}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </View>

                <Modal visible={this.state.isFilterVisible} transparent={true} animationType='slide' >
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(35, 45, 62, 0.73)' }} activeOpacity={1}
                    //onPress={() => this.setState({isFilterVisible : false})}
                    >
                        <View style={{ backgroundColor: '#FBFBFB', justifyContent: 'flex-end', borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                            <Image source={images.Rectangle_modal} style={{ alignSelf: 'center', marginTop: getHeight(10) }} />
                            <Text style={styles.setFilterText}>Set Filters</Text>
                            <View style={{ marginTop: getHeight(30), marginHorizontal: getWidth(20) }}>
                                <CustomInput
                                    inputMainView={{ borderWidth: 0 }}
                                    placeholderText={{color : this.state.category == '' ? '#6A6A6A' : '#1A1D1E',fontFamily:CustomFont.FontSemiBold}}
                                    headerTextStyle={styles.inputTextStyle}
                                    header={'Category'}
                                    value={this.state.category == '' ? 'None' : this.state.category}
                                    onPress={() => this.setState({ isCategotyVisible: true })}
                                    lastImage={images.dropDown_icon}
                                />
                                <CustomInput
                                    inputMainView={{ borderWidth: 0 }}
                                    placeholderText={{color : this.state.subCategory == '' ? '#6A6A6A' : '#1A1D1E',fontFamily:CustomFont.FontSemiBold}}
                                    headerTextStyle={styles.inputTextStyle}
                                    header={'Sub Category'}
                                    value={this.state.subCategory == '' ? 'None' : this.state.subCategory}
                                    onPress={() => this.setState({ isSubCategotyVisible: true })}
                                    lastImage={images.dropDown_icon}
                                />
                                <CustomCreditInput
                                    inputAmountMainView={{ borderWidth: 0 }}
                                    placeholderText={{color : this.state.amount == '' ? '#6A6A6A' : '#1A1D1E',fontFamily:CustomFont.FontSemiBold}}
                                    inputMainView={{ borderWidth: 0 }}
                                    firstImage={images.Wallet}
                                    headerTextStyle={styles.inputTextStyle}
                                    header={'Amount'}
                                    value={this.state.amount == '' ? '$2k-$5k' : this.state.amount}
                                    onPress={() => this.setState({ isAmountVisible: true })}
                                    lastImage={images.dropDown_icon}
                                />

                                <View style={{ marginTop: getHeight(30), marginBottom: getHeight(25) }}>
                                    <Text style={styles.inputTextStyle}>Eligibility</Text>
                                    <FlatList
                                        style={{ marginTop: getHeight(20) }}
                                        data={this.state.arrEligibilityData}
                                        renderItem={({ item, index }) => this.renderEligibilityData(item, index)}
                                        numColumns={2}
                                        bounces={false}
                                    />
                                </View>

                                <MyCustomerButton
                                    TouchableStyle={{ borderRadius: 12, marginBottom: getHeight(20) }}
                                    textStyle={{ fontSize: FontSize.FontSize16, fontFamily: CustomFont.FontSemiBold }}
                                    Text="Apply Filters"
                                    onPress={() => this.setState({ isFilterVisible: false })}
                                />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <Modal visible={this.state.isCategotyVisible} transparent={true} >
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ isCategotyVisible: false, })}>
                            <View style={{ marginTop: Platform.OS == 'ios' ? getHeight(265) : getHeight(235), marginHorizontal: getWidth(20) }}>
                                <FlatList
                                    data={this.state.arrCategotyData}
                                    renderItem={({ item, index }) => this.renderCategoryData(item, index)}
                                    bounces={false}
                                />
                            </View>
                        </TouchableOpacity>
                    </Modal>
                    <Modal visible={this.state.isSubCategotyVisible} transparent={true} >
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ isSubCategotyVisible: false, })}>
                            <View style={{ marginTop: Platform.OS == 'ios' ? getHeight(348) : getHeight(318), marginHorizontal: getWidth(20) }}>
                                <FlatList
                                    data={this.state.arrSubCategotyData}
                                    renderItem={({ item, index }) => this.renderSubCategoryData(item, index)}
                                    bounces={false}
                                />
                            </View>
                        </TouchableOpacity>
                    </Modal>

                    <Modal visible={this.state.isAmountVisible} transparent={true} >
                        <TouchableOpacity style={{ flex: 1 }} onPress={() => this.setState({ isAmountVisible: false, })}>
                            <View style={{ marginTop: Platform.OS == 'ios' ? getHeight(425) : getHeight(410), marginHorizontal: getWidth(20) }}>
                                <FlatList
                                    data={this.state.arrAmountData}
                                    renderItem={({ item, index }) => this.renderAmountData(item, index)}
                                    bounces={false}
                                />
                            </View>
                        </TouchableOpacity>
                    </Modal>
                </Modal>
            </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    TextInputEditView: {
        backgroundColor: GColor.colorwhite,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 13,
        flex: 1,
        marginRight: wp(4)
    },
    textinput: {
        flex: 1,
        paddingVertical: hp(2),
        fontSize: FontSize.FontSize16,
        padding: hp(2),
        color: GColor.colorBlack
    },
    suggestionText: {
        fontFamily: CustomFont.FontSemiBold,
        color: GColor.colorBlack,
        fontSize: FontSize.FontSize20,
        flex: 1
    },
    itemMainView: {
        backgroundColor: GColor.colorwhite,
        //  maxHeight:hp(18),
        marginBottom: hp(1),
        marginRight: wp(5.33),
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowColor: GColor.themeGray,
        shadowOffset: { width: 2, height: 2 },
        elevation: 5,
    },
    itemMethodText: {
        color: GColor.lightGray,
        fontSize: FontSize.FontSize12,
        fontFamily: CustomFont.FontRegular,
        marginTop: hp(1)
    },
    itemtitle: {

        marginTop: getHeight(20),
        fontSize: FontSize.FontSize16,
        color: '#151313',
        fontFamily: CustomFont.FontSemiBold,
        marginRight: wp(12)
    },
    itemIncrease: {
        marginBottom: getHeight(23),
        marginTop: hp(1),
        color: '#151313',
        fontSize: FontSize.FontSize12,
        fontFamily: CustomFont.FontSemiBold
    },
    predictText: {
        color: '#6A6A6A',
        fontSize: FontSize.FontSize12,
        fontFamily: CustomFont.FontRegular
    },
    showAllText: {
        color: '#6A6A6A',
        fontSize: FontSize.FontSize12,
        fontFamily: CustomFont.FontRegular
    },
    itemVerticalView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: GColor.colorwhite,
        marginBottom: hp(2),
        marginRight: wp(5),
        borderRadius: 20,
        shadowOpacity: 0.5,
        shadowColor: GColor.themeGray,
        shadowOffset: { width: 2, height: 2 },
        elevation: 5,
    },
    itemHeader: {
        color: GColor.colorBlack,
        fontSize: FontSize.FontSize16,
        fontFamily: CustomFont.FontSemiBold
    },
    itemDescPrice: {
        color: GColor.lightGray,
        fontSize: FontSize.FontSize12,
        fontFamily: CustomFont.FontRegular
    },
    setFilterText: {
        alignSelf: 'center',
        fontSize: FontSize.FontSize16,
        fontFamily: CustomFont.FontSemiBold,
        color: '#1A1D1E',
        marginTop: getHeight(25)
    },
    inputTextStyle: {
        color: '#1A1D1E',
        fontFamily: CustomFont.FontSemiBold,
        fontSize: FontSize.FontSize16,
    },
    eligibilityItemView: {
        borderRadius: 10,
        borderWidth: 0.5,
        width: getWidth(162),
        marginBottom: getHeight(15),
        marginRight: getWidth(10)
    },
    eligibilityItemText: {
        fontSize: FontSize.FontSize14,
        fontFamily: CustomFont.FontRegular,
        fontWeight: '500',
        marginVertical: getHeight(8),
        alignSelf: 'center'
    },
    itemCategotyText: {
        fontSize: FontSize.FontSize12,
        marginLeft: getWidth(18),
        fontFamily: CustomFont.FontRegular,
        color: GColor.colorBlack,
        paddingVertical: getHeight(5)
    }
})