import { StyleSheet } from "react-native";
import colors from "../../../styles/colors/colors";
export default styles = StyleSheet.create({
    
    inner_container:{
        flex:1,
        margin:7,
    },
    title:{
        color:colors.black,
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:10,
        
    },
    accTitle:{
        fontSize:17,
        
        
    },
    registTitle:{
        marginLeft:3,
        fontSize:17,
        color:colors.blue,
        textDecorationLine: 'underline'
    },
    textContainer:{
        flexDirection:'row',
        textAlign:'center',
        alignSelf:'center',
        margin:6,
    
    }
})