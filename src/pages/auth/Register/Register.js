import React, { useState } from "react";
import {SafeAreaView,Text,View ,TouchableOpacity} from 'react-native';
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import styles from './Register.styles'
import { Formik } from "formik";
import auth from '@react-native-firebase/auth';
import RegisterFailed from "../../../utils/BannerMessage/Register/RegisterFailed";
import RegisterSucces from "../../../utils/BannerMessage/Register/RegisterSucces";
import { showMessage } from "react-native-flash-message";
import NotEqualPassword from "../../../utils/BannerMessage/Register/NotEqualPassword";
import authErrorCode from "../../../utils/authMessage/authErrorCode";
import LoadingCat from "../../../components/Animation/Loading/LoadingCat";
const Register = ({navigation}) =>{
    
    const initalFormValues = {
        usermail : '',
        password : '',
        repassword: '',
    }   

    const [loading,setLoading] = useState(false);
    const handleFormSubmit =  async(initalFormValues) =>{
        if(initalFormValues.password !== initalFormValues.repassword){
             NotEqualPassword();
             return;
        }
        try {
            setLoading(true);
            await auth().createUserWithEmailAndPassword(initalFormValues.usermail, initalFormValues.password) 
            console.log(initalFormValues)     
            setLoading(false)
             RegisterSucces();
             navigation.navigate("Login")

        } catch (error) {
            setLoading(false);
            showMessage({
                message: authErrorCode(error.code),
                type: "danger",
                icon:'warning'                
              });
            
        }
        
    }
    if(loading){
        <LoadingCat/>
    }
     return(
        <View style={styles.inner_container}>
        <Text style={styles.title}>Register </Text>
        <Formik initialValues={initalFormValues} onSubmit={handleFormSubmit}>
                    {({values,handleChange,handleSubmit}) => (
                        <>
             <Input onChangeText={handleChange('usermail')} placeHolder="E-Mail" value={values.usermail} />
             <Input onChangeText={handleChange('password')} placeHolder="Password" secureText="true" value={values.password} />
             <Input onChangeText={handleChange('repassword')} placeHolder="Password Again" secureText="true" value={values.repassword} />
             <Button text="Submit" onPress={handleSubmit} />
             </>
            )}
             </Formik>
     
     </View>

    )
}
export default Register;