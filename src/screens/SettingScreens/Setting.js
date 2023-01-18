import React from 'react';
import {Text, View} from 'react-native';
import images from '../../assets/images';
import { CustomeHeader } from '../../common/GComponents';

export default class Setting extends React.Component{
    constructor(props) {
        super(props);

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
    render() {
        return(
            <View style={{flex:1,backgroundColor:'purple'}}>
                <Text>Setting</Text>
            </View>
        )
    }
}