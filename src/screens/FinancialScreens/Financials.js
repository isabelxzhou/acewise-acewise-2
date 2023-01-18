import React from 'react';
import { ImageBackground, StyleSheet, Text,ScrollView, FlatList ,TextInput, View, TouchableOpacity, Image } from 'react-native';
import images from '../../assets/images';
import GColor from '../../common/GColors';
import { CustomFont, FontSize, getHeight, getWidth } from '../../common/GConstant';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { CustomeHeader, CustomInput } from '../../common/GComponents';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default class Financials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amount : '',
            selectedStartDate : '',
            selectedEndDate : '',
            isStartDatePickerVisible : false,
            isEndDatePickerVisible : false , 
            datePickerType : 'date',
            endDate: new Date(), 
            isTypeVisible : false,
            selectedType : 'Profit',
            arrProCostData : [
                {
                    type : 'Profit',
                },
                {
                    type : 'Cost',
                },
            ]
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

    renderProCostData = (item , index) => {
        return(
            <TouchableOpacity style={[styles.inputInnerView,{marginTop : hp(0.2),borderRadius:0 ,borderWidth:0.2}]} activeOpacity={0.7} 
            onPress={() => this.setState({isTypeVisible : false ,selectedType : item.type })}
            >
            <Text style={[styles.inputStyle,{color:'#6A6A6A'}]}>{item.type}</Text>
        </TouchableOpacity>
        )
    }
    render() {
        return (
            <ImageBackground style={{ flex: 1 }} source={images.Home_bg} >
                <KeyboardAwareScrollView style={{ flex: 1, marginHorizontal: getWidth(33), marginTop: getHeight(20),marginBottom:getHeight(80) }} bounces={false} showsVerticalScrollIndicator={false}>
                    <Text style={styles.updateText}>Update Financials</Text>
                    <View style={styles.uploadContainer}>
                        <Text style={styles.invoiceText}>Upload invoices here</Text>
                        <TouchableOpacity style={styles.btnView} activeOpacity={0.7}
                        onPress={() => this.props.navigation.navigate('ImageClick')}
                        >
                            <Text style={styles.uploadText}>Upload</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.profitCostText}>Profit or Cost</Text>
                    <TouchableOpacity style={[styles.inputInnerView,{flexDirection:'row',alignItems:'center'}]} activeOpacity={0.7}
                    onPress={() => this.setState({isTypeVisible : true})}
                    >
                            <Text style={[styles.inputStyle,{flex:1,color : this.state.selectedType == "" ? '#6A6A6A' : GColor.colorBlack  }]}>{this.state.selectedType == '' ? 'Profit' : this.state.selectedType}</Text>
                            <Image source={images.dropDown_icon} style={{marginRight:getWidth(25)}} />
                        </TouchableOpacity>
                        {
                            this.state.isTypeVisible &&
                            <FlatList
                            bounces={false}
                            style={{borderWidth:0.5,borderColor: '#E2E2E2',borderRadius:12 }}
                        data = {this.state.arrProCostData}
                        renderItem = {({item , index}) => this.renderProCostData(item , index)}
                        />
                        }
                    <CustomInput
                    placeholderText={{color : this.state.selectedStartDate == "" ? '#6A6A6A' : '#1A1D1E',fontFamily:CustomFont.FontSemiBold }}
                    header={'Start Date'}
                    value={this.state.selectedStartDate == "" ? "mm/dd/yyyy" : this.state.selectedStartDate}
                    onPress={() => this.setState({isStartDatePickerVisible : true})}
                    />
                    <CustomInput
                    placeholderText={{color : this.state.selectedEndDate == "" ? '#6A6A6A' : '#1A1D1E',fontFamily:CustomFont.FontSemiBold }}
                    header={'End Date'}
                    value={this.state.selectedEndDate == "" ? "mm/dd/yyyy" : this.state.selectedEndDate}
                    onPress={() => this.setState({isEndDatePickerVisible : true})}
                    />
                    <View style={{ marginTop: getHeight(10) }}>
                        <Text style={styles.headerText}>Amount</Text>
                        <TouchableOpacity style={styles.inputInnerView} activeOpacity={0.7} >
                           <TextInput
                           placeholderTextColor="#6A6A6A"
                           style={styles.inputStyleAmount}
                           placeholder="Enter Amount here"
                           value={this.state.amount}
                           onChangeText={(text) => {
                               this.setState({amount : text})
                           }}
                           keyboardType ="numeric"
                           />
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>

                <DateTimePickerModal
            minimumDate={new Date()}
            isVisible={this.state.isStartDatePickerVisible}
            mode={this.state.datePickerType}
            onConfirm={(date) => {
                this.setState({isStartDatePickerVisible : false , endDate : date , selectedStartDate : moment(date).format('DD/MM/YYYY')},() => {
                    console.log("Start Date",date)
                })
              
            }}
            onCancel={() => {
              this.setState({ isStartDatePickerVisible: false });
            }}
          />

          <DateTimePickerModal
            minimumDate={this.state.endDate}
            isVisible={this.state.isEndDatePickerVisible}
            mode={this.state.datePickerType}
            onConfirm={(date) => {
                this.setState({isEndDatePickerVisible : false , selectedEndDate : moment(date).format('DD/MM/YYYY')},() => {
                    console.log("End Date",date)
                })
            }}
            onCancel={() => {
              this.setState({ isEndDatePickerVisible: false });
            }}
          />


            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    updateText: {
        color: GColor.colorBlack,
        fontFamily: CustomFont.FontSemiBold,
        fontSize: FontSize.FontSize20
    },
    invoiceText: {
        color: '#151313',
        fontFamily: CustomFont.FontRegular,
        fontSize: FontSize.FontSize14,
        marginTop: getHeight(20),
        alignSelf: 'center'
    },
    uploadContainer: {
        marginHorizontal:getWidth(16),
        marginTop: getHeight(15),
        backgroundColor: GColor.colorwhite,
        borderRadius: 28,
        shadowRadius: getHeight(12),
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.2,
        shadowColor: 'gray',
        elivation: 5,
    },
    btnView: {
        marginHorizontal: getWidth(50),
        backgroundColor: GColor.themeBlue,
        borderRadius: 12,
        marginTop: getHeight(20),
        marginBottom: getHeight(30)
    },
    uploadText: {
        alignSelf: "center",
        color: GColor.colorwhite,
        fontFamily: CustomFont.FontRegular,
        fontSize: FontSize.FontSize16,
        paddingHorizontal: getWidth(5),
        marginVertical: getHeight(6),

    },
    profitCostText: {
        color: GColor.colorBlack,
        fontSize: FontSize.FontSize16,
        fontFamily: CustomFont.FontSemiBold,
        marginTop: getHeight(20)
    },
    textinput: {
        marginLeft: getWidth(18),
        marginVertical: getHeight(18),
        fontSize: FontSize.FontSize14,

    },
    headerText: {
        color: '#6A6A6A',
        fontSize: FontSize.FontSize16,
        fontFamily: CustomFont.FontRegular,
    },
    inputInnerView: { backgroundColor: GColor.colorwhite, borderRadius: 12, marginTop: getHeight(8), borderWidth: 0.5, borderColor: '#E2E2E2' },
    inputStyle: {
        marginLeft: getWidth(18),
        marginVertical: getHeight(13),
        fontSize: FontSize.FontSize12,
        fontFamily:CustomFont.FontSemiBold
      },
      inputStyleAmount : {
        marginLeft: getWidth(18),
        marginVertical: getHeight(13),
        fontSize: FontSize.FontSize12,
        color:'#1A1D1E',
        fontFamily:CustomFont.FontSemiBold
      }
    })