import React from "react";
import { Button, Platform, Text, View } from "react-native";
import WebView from "react-native-webview";
import { WebViewLink } from "../../APIManager/ApiConstants";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'; import images from '../../assets/images';
import GColor from "../../common/GColors";

export default class WebLoaderScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            titleText : ''
        }
    }
    componentDidMount = () => {
        this.setState({titleText : this.props.route.params.title},() => console.log("title  => " , this.state.titleText))
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: GColor.colorwhite}}>
                <Button
                     onPress={() => this.props.navigation.navigate('UserDashBoardScreen',{title : this.state.titleText})}
                    title="Finished Applying"
                />
                <Button onPress={() => doAutofill()} disabled title="Autofill My Info" />

             {Platform.OS != 'web' &&
                <WebView
                source={{ uri: WebViewLink.webLoader }}
                style={{ marginTop: hp(3) }}
            />
             }
            </View>
        )
    }
}