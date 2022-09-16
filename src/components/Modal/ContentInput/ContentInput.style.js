import { Dimensions, StyleSheet } from "react-native";
import colors from "../../../styles/colors/colors";
const deviceSize = Dimensions.get('window')
export default styles = StyleSheet.create({
    container:{
        backgroundColor:colors.blue,
        padding:15,
        
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderRadius:10,
        height:deviceSize.height/3.6,
        

    },
    modal:{
            justifyContent:'flex-end',
            margin:0,
    },
    input_container:{
        margin:10,
        borderWidth:0.4,
        backgroundColor:'white',
        borderColor:'white',
        borderRadius:6,
        height:31,
        
        
        
        
    },
    button_container:{
            marginTop:15,
        

    },
    title:{
        fontSize:16,
        color:'white',
        fontWeight:'bold',
        textAlign:'center',
        margin:10,
    }
})