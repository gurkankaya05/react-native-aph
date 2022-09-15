import React, { useState } from "react";
import { SafeAreaView ,Text,View} from 'react-native';
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import ContentInput from "../../components/Modal/ContentInput/ContentInput";
import styles from './MainPage.styles';


const MainPage = () =>{
    const [inputModalVisible,setInputModalVisible] = useState(false);


    const handleInputToggle =() =>{
        setInputModalVisible(!inputModalVisible)
    }
    const handleSendContent = (content) =>{
        console.log(content)

    }
    return (

            <SafeAreaView style={styles.container}>
            <FloatingButton onPress={handleInputToggle}/>
            <ContentInput visible={inputModalVisible} 
            onClose={handleInputToggle} 
            onSend={handleSendContent} />
            </SafeAreaView>
            
        
            
 
    )
}
export default MainPage;
