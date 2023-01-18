import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; 
import { FontSize } from "../../common/GConstant";

export default class UserDashBoardScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titleText : 'New York State COVID-19 Pandemic Small Business Recovery',
            arrUserStatus : [
                {
                    status : 'Applied',
                    discipation : 'New York State COVID-19 Pandemic Small Business Recovery'
                },
                // {
                //     status : 'Pending',
                //     discipation : 'New York State COVID-19 Pandemic Small Business Recovery'
                // },
            ]
        }
    }

    componentDidMount = () => {
        //this.setState({titleText : this.props.route.params.title},() => console.log("title Dashboard screen => " , this.state.titleText))
    }

    renderUserStatusView = (item , index) => {
        return(
              <View style={{marginHorizontal:wp(5),marginTop:hp(1)}}>
                <Text style={styles.statusText}>{item.status}</Text>
                <Text style={styles.discText}>{item.discipation}</Text>
                </View> 
        )
    }

    render() {
        return(
            <View style={{flex:1 , backgroundColor:'white'}}>
               
                <FlatList
                data={this.state.arrUserStatus}
                renderItem={({item , index}) => this.renderUserStatusView(item , index)}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }   
}

const styles = StyleSheet.create({
    statusText : {
        alignSelf:'center',
        fontSize:FontSize.FontSize18
    },
    discText : {
        fontSize:FontSize.FontSize16,
        marginTop:hp(2),
        textAlign:'center'
    }
})