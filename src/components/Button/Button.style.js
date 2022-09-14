import { StyleSheet } from 'react-native';
const base_style = 
StyleSheet.create({
    container:{
        backgroundColor:'#263238'    ,
        borderRadius:10,
        padding:16,
        margin:10,
        alignItems:'center',
        justifyContent:'center',
    },
    text:{
        color:'#fafafa',
        fontWeight:'bold',
        
    }
    
    })





export default styles ={
    primary: StyleSheet.create({
        ...base_style,
        container:{
            ...base_style.container,
            backgroundColor:'#263238'    ,
           
        },
        
        text:{
            ...base_style.text,
            color:'#fafafa',
            
            
        }
        
        }),
        secondary: StyleSheet.create({
            ...base_style,
            container:{
                ...base_style.container,
                backgroundColor:'white',
               
            },
            text:{
                ...base_style.text,
                color:'red',
            }
            
            })
}