import { StyleSheet,Platform } from 'react-native';
export default styles = StyleSheet.create({
    container:{
        margin:3,
   
    },
    input_container:{
        borderWidth:0.6,
        margin:5,
        padding:Platform.OS === 'android' ? 0 : 16 ,
        borderRadius:8,
        borderColor:'#37474f',
        
        
    },
    label:{
        fontSize:15,
        fontWeight:'bold',
        marginLeft:5
    }
})