
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';import SplashScreen from 'react-native-splash-screen';
 import images from '../../assets/images';
import GColor from '../../common/GColors';
import { MyCustomerSearchBar } from '../../common/GComponents';
import { CustomFont, FontSize } from '../../common/GConstant';
import { translations } from '../../localize/translation';

export default class GrantSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDefaultData: true,
      isBlackedPress: false,
      isWomanPress: false,
      arrDefaultData: [
        {
          amount: '$5000-$50000',
          title: 'New York State COVID-19 Pandemic Small Business Recovery'
        },
        {
          amount: '$180-$30000',
          title: 'New York City Restaurant Revitalization Program'
        },
        {
          amount: '$10000',
          title: 'Uber Small Business Relief'
        },
        {
          amount: '$10000',
          title: 'NYC Small Business Resilience Grant'
        },
        {
          amount: '$10000',
          title: 'NYC Small Business Resilience Grant'
        },
        {
          amount: '$10000',
          title: 'NYC Small Business Resilience Grant'
        },
        
      ],
      arrBlackedOwnedData: [
        {
          amount: '$5000-$50000',
          title: 'New York State COVID-19 Pandemic Small Business Recovery'
        },
        {
          amount: '$180-$30000',
          title: 'New York City Restaurant Revitalization Program'
        },
      ],
      arrWomanOwndedData: [
        {
          amount: '$5000-$50000',
          title: 'New York State COVID-19 Pandemic Small Business Recovery'
        },
        {
          amount: '$10000',
          title: 'Uber Small Business Relief'
        },
      ],
    }
  }

  componentDidMount = () => {
    SplashScreen.hide();
}

  renderDefaultItems = (item, index) => {
    return (
      <TouchableOpacity style={{ marginBottom: hp(7) }}
      activeOpacity={0.8}
        onPress={() => this.props.navigation.navigate("GranchSearchDetails", { title: item.title, amount: item.amount })}
      >
        <Text style={styles.itemAmount}>{item.amount}</Text>
        <Text style={styles.itemTitle}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: GColor.colorwhite }}>
        <View style={{ marginTop: hp(3),flex: 1}}>
          <MyCustomerSearchBar
            style={{ marginHorizontal: wp(5) }}
            imageSource={images.magnifying_glass}
          />
          <View style={styles.flatlistMainView}>
            <Text style={styles.filterBy}>{translations.filterBy}</Text>
            <View style={styles.mainHorizonView}>

              <TouchableOpacity
              activeOpacity={0.7}
                style={{  flexDirection: 'row', alignItems: 'center' }}
                onPress={() => {
                  this.setState({ isDefaultData: false, isBlackedPress: !this.state.isBlackedPress, isWomanPress: false }, () => {
                    if (this.state.isBlackedPress == false) {
                      this.setState({ isDefaultData: true })
                    }
                  })
                }}
              >
                <Text style={styles.headers}>Blacked-owned</Text>
                <View  >
                <Switch 
                thumbColor={this.state.isBlackedPress ? GColor.pixelBlue : null}
                  trackColor={{true: GColor.pixelBlue, false: 'grey'}}
                  
                  style={styles.switchcStyle} 
                  value={this.state.isBlackedPress}
                  onChange={() => {
                    this.setState({ isDefaultData: false, isBlackedPress: !this.state.isBlackedPress, isWomanPress: false }, () => {
                      if (this.state.isBlackedPress == false) {
                        this.setState({ isDefaultData: true })
                      }
                    })
                  }}
                  />
                </View>
                
              </TouchableOpacity>
              <TouchableOpacity
              activeOpacity={0.7}
                style={{  flexDirection: 'row', alignItems: 'center' }}
                onPress={() => {
                  this.setState({ isDefaultData: false, isWomanPress: !this.state.isWomanPress, isBlackedPress: false }, () => {
                    if (this.state.isWomanPress == false) {
                      this.setState({ isDefaultData: true })
                    }
                  })
                }}
              >
                <Text style={styles.headers}>Woman-owned</Text>
                <Switch 
                thumbColor={this.state.isWomanPress ? GColor.pixelBlue : null} 
                  trackColor={{true: GColor.pixelBlue, false: 'grey'}}
                  style={styles.switchcStyle}
                  value={this.state.isWomanPress}
                  onChange={() => {
                    this.setState({ isDefaultData: false, isWomanPress: !this.state.isWomanPress, isBlackedPress: false }, () => {
                      if (this.state.isWomanPress == false) {
                        this.setState({ isDefaultData: true })
                      }
                    })
                  }}
                  />

              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('SearchOptions')}
              >
                <Text style={styles.moreText}>More</Text>
              </TouchableOpacity>

            </View>
           
            {
              this.state.isDefaultData &&
              <FlatList
              showsVerticalScrollIndicator={false}
                style={styles.flatlistDataView}
                data={this.state.arrDefaultData}
                renderItem={({ item, index }) => this.renderDefaultItems(item, index)}
              />
            }
            {
              this.state.isBlackedPress &&
              <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.flatlistDataView}
                data={this.state.arrBlackedOwnedData}
                renderItem={({ item, index }) => this.renderDefaultItems(item, index)}
              />
            }
            {
              this.state.isWomanPress &&
              <FlatList
              showsVerticalScrollIndicator={false}
              style={styles.flatlistDataView}
                data={this.state.arrWomanOwndedData}
                renderItem={({ item, index }) => this.renderDefaultItems(item, index)}
              />
            }
            
          </View>
        </View>
      </View>
    )
  }
}

export const styles = StyleSheet.create({
  flatlistMainView: {
    marginHorizontal:wp(5),
    marginTop: hp(1),
    flex: 1
  },
  mainHorizonView : { flexDirection: 'row', alignItems: 'center', marginTop: hp(2),},
  filterBy: {
    textAlign: "center",
    fontFamily: CustomFont.FontSemiBold,
    //  fontFamily: "poppins-semi-bold",
    fontSize: FontSize.FontSize18,
  },
  headers: {
    fontFamily: CustomFont.FontSemiBold,
    fontSize: FontSize.FontSize12,
    marginRight:wp(3),
  },
  switchcStyle : { transform: [{ scaleX: .7 }, { scaleY: .7 }] ,marginLeft:wp(-4)},
  moreText: {
    fontFamily: CustomFont.FontSemiBold,
    fontSize: FontSize.FontSize12,
    //marginLeft:wp(5),
  },
  itemAmount: {
    fontSize: FontSize.FontSize16,
  },
  itemTitle: {
    marginTop: hp(2),
    fontSize: FontSize.FontSize16,
    textAlign: 'center',
    alignSelf:'flex-start'
  },
  flatlistDataView : { marginTop: hp(3),marginHorizontal:wp(2) ,},
})