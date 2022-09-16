import React, { useEffect, useState } from "react";
import { SafeAreaView ,Text,View,FlatList} from 'react-native';
import FloatingButton from "../../components/FloatingButton/FloatingButton";
import ContentInput from "../../components/Modal/ContentInput/ContentInput";
import styles from './MainPage.styles';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from "../../utils/parseContentData/parseContentData";
import MessageCard from "../../components/MessageCard/MessageCard";
import Error from "../../components/Animation/Error/Error";



const MainPage = () =>{
    const [inputModalVisible,setInputModalVisible] = useState(false);
    const[contentList, setContentList] = useState([]);



    useEffect(() =>{
        database().ref('/messages')
        .on('value' , snapshot => {
            const contentData = snapshot.val()
            if(!contentData){
                return;
            }
            const parsedData = parseContentData(contentData || {});
            setContentList(parsedData);
        })

    },[])

    const handleInputToggle =() =>{
        setInputModalVisible(!inputModalVisible)
    }
    const handleSendContent = (content) =>{
        handleInputToggle();
        sendContent(content)
        

    }

    const sendContent = (content) =>{
        const usermail = auth().currentUser.email;
        const contentObject ={
            text:content,
            username:usermail.split('@')[0],
            date : new Date().toISOString()
        }
        database().ref('/messages/').push(contentObject);
        
    }
    const renderContent = ({item}) => <MessageCard message={item}/>
    return (

            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Messages</Text>
                
                <FlatList 
                data={contentList}
                renderItem={renderContent}
                
                /> 
           

            <ContentInput visible={inputModalVisible} 
            onClose={handleInputToggle} 
            onSend={handleSendContent} />

            <FloatingButton onPress={handleInputToggle}/>
            </SafeAreaView>
                        
 
    )
}
export default MainPage;
