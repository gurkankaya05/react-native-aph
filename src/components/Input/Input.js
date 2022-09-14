import React from "react";
import { View,Text ,TextInput } from 'react-native'
import styles from "./Input.styles";

const Input = ({label, onChangeText,placeHolder,secureText,value}) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
            <TextInput autoCapitalize="none" onChangeText={onChangeText} value={value} placeholder={placeHolder} secureTextEntry={secureText}/>
            </View>
        </View>

    )
}
export default Input;