import React,{useState} from "react";
import { View,TextInput, Text} from 'react-native'
import Button from "../../Button/Button";
import Modal from "react-native-modal"; 
import styles from './ContentInput.style'
import colors from "../../../styles/colors/colors";

const ContentInput =({visible,onClose,onSend}) =>{

    const [text,setText] = useState(null)
    const handleSend = () =>{
        if(!text){
            return;
        }
        else{
            onSend(text);
            setText('');
        }
    }
    
    return(
        <Modal isVisible={visible}
        onSwipeComplete={onClose}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        style={styles.modal} >
            <View style={styles.container}>
                <Text style={styles.title}>Send Your Message!</Text>
                <View style={styles.input_container}> 
                <TextInput placeholder="Write message..." 
                onChangeText={setText} multiline placeholderTextColor="gray"/>
                </View>
                <View style={styles.button_container}>
                <Button text="Submit" onPress={handleSend} theme="secondary" />
                </View>
            </View>
            </Modal>
    )
}
export default ContentInput;