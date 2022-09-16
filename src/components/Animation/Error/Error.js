import React from 'react';
import Lottie from 'lottie-react-native';
import { Dimensions, View } from 'react-native';


const Error =() =>{

    return(
        <View style={{flex:1,backgroundColor:"#035b80"}}> 
            <Lottie source={require('../../../assets/error.json')} autoPlay loop />
        </View>
        
   
    )  

}
export default Error;