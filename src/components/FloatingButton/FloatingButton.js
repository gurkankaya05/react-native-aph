import React from "react";
import { View,TouchableOpacity,Text } from 'react-native'
import styles from './FloatingButton.style'
const FloatingButton = ({onPress}) =>{

    return(
        <View style={styles.main}>      

        <TouchableOpacity onPress={onPress} style={styles.container}>
           
                <Text style={styles.text}>+</Text>
        
        </TouchableOpacity>
        </View>
    )
}
export default FloatingButton;