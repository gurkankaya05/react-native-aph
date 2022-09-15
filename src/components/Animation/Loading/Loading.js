import React from 'react';
import Lottie from 'lottie-react-native';
import {View} from 'react-native'
import { Dimensions } from 'react-native';

const Loading =() =>{

    return(
        <View style={{ marginBottom:20,marginTop:47,}}>
        <Lottie  style={{alignSelf:'center',}} autoSize={true}  source={require('../../../assets/loading.json')} autoPlay loop />
        </View>
    )   

}
export default Loading;