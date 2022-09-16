import React from "react";
import { SafeAreaView,Text,TouchableOpacity,View } from 'react-native';
import { format, formatDistance, formatRelative, parseISO, subDays } from 'date-fns'

import styles from './MessageCard.style'
const MessageCard = ({message}) =>{
    const formattedDate = formatDistance(parseISO(message.date),new Date(), 
    { addSuffix: true });

    return (
        
        <View style={styles.container}>
    
            <View style={styles.inner_container}>
            <Text style={styles.name}>{message.username}</Text>
            <View style={styles.inner_content}>
            <Text style={styles.content}>{message.text}</Text>
            </View>
           
            </View>
      
            {/* <Text style={styles.content}>{message.text}</Text> */}
            <Text style={styles.date}>{formattedDate}</Text>
         
            
          
            </View>
    )

}
export default MessageCard;