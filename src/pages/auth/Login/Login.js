import React, { useState } from "react";
import { SafeAreaView,Text,TouchableOpacity,View } from 'react-native';
import Input from "../../../components/Input/Input";
import styles from './Login.styles';
import Button from '../../../components/Button/Button'
import auth from '@react-native-firebase/auth'
import { Formik } from "formik";
import LoginFailed from "../../../utils/BannerMessage/Login/LoginFailed";
import LoginSuccess from "../../../utils/BannerMessage/Login/LoginSuccess";
import { showMessage } from "react-native-flash-message";
import authErrorCode from "../../../utils/authMessage/authErrorCode";
const Login = ({navigation}) =>{

    const registerScreen = () =>{
        navigation.navigate('Register')
    }
    const [loading,setLoading] = useState(false);
    const initalFormValues = {
        usermail : '',
        password : '',
    }
 
     const handleFormSubmit= async(initalFormValues) =>{
        
          try {
            setLoading(true)
            await auth().signInWithEmailAndPassword(initalFormValues.usermail, initalFormValues.password)
            console.log(initalFormValues)    
            setLoading(false)
            LoginSuccess();
            
        } catch (error) {
            setLoading(false)
            showMessage({
                message: authErrorCode(error.code),
                type: "danger",
                icon:'warning'                
              });
            
        }
      
    }

    return(
            <View style={styles.inner_container}>
                <Text style={styles.title}>Welcome! </Text>
                <Formik initialValues={initalFormValues} onSubmit={handleFormSubmit}>
                    {({values,handleChange,handleSubmit}) => (
                        <>
             <Input onChangeText={handleChange('usermail')} placeHolder="E-Mail" value={values.usermail} />
             <Input onChangeText={handleChange('password')} placeHolder="Password" secureText="true" value={values.password} />
             <Button text="Submit" onPress={handleSubmit} />
             </>
            )}
             </Formik>
             <View style={styles.textContainer}>
             <Text style={styles.accTitle}>Don't have an account?</Text>
             <TouchableOpacity onPress={registerScreen}>
             <Text style={styles.registTitle}>Register!</Text>
             </TouchableOpacity>
             </View>
             </View>
    
    )
}
export default Login;
