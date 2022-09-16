import { Dimensions, StyleSheet } from "react-native";
import colors from "../../styles/colors/colors";
export default styles = StyleSheet.create({
    container:{
        flex:1,
        padding:7,
        paddingBottom:15,        
        flexDirection:'row',
        backgroundColor:colors.blue,
        borderRadius:11,
        shadowColor:colors.blue,
        shadowOpacity:0.1,
        
        marginVertical:6,
        
        margin:17,
        
        
        
    },
    inner_container:{
        margin:1,
        
          
        
        
    },
    name:{
        color:'#fafafa' ,    
        fontSize:12,
        fontWeight:'bold',
        marginLeft:10,
        
        
    },
    date:{
        fontSize:10,
        fontStyle:'italic',
        flex:1,
        marginTop:10,
        
        
        color:'white',    
        flexDirection:'row',
        textAlign:'right'
    },
    
    

    content:{
        marginLeft:10,
        color:'white',
        
    },
    inner_content:{
        marginTop:10,
        
    },
    likeit:{
        
            fontSize:10,
            fontStyle:'italic',
            flex:1,
            marginTop:10,    
            color:'white',    
            flexDirection:'row',
            textAlign:'right'
        
    },

})