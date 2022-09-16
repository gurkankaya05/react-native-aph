import React from "react";
import { View,TouchableOpacity,Text } from 'react-native'
import styles from './FloatingButton.style'
const FloatingButton = ({onPress}) =>{

    return(
        

        <TouchableOpacity onPress={onPress} style={styles.container}>
           
                <Text style={styles.text}>+</Text>
        
        </TouchableOpacity>
    
    )
}
export default FloatingButton;