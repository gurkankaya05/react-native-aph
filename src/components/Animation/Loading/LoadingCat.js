import React from 'react';
import Lottie from 'lottie-react-native';
import { Dimensions, View } from 'react-native';


const LoadingCat =() =>{

    return(
        <View style={{flex:1,backgroundColor:"#035b80"}}> 
            <Lottie source={require('../../../assets/cat-loader2.json')} autoPlay loop />
        </View>
        
   
    )  

}
export default LoadingCat;