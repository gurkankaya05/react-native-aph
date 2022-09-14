import React from "react";
import { Button, SafeAreaView,Text,View } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./pages/auth/Register/Register";
import Login from "./pages/auth/Login/Login";
import colors from "./styles/colors/colors";
import FlashMessage from "react-native-flash-message";



const Stack = createNativeStackNavigator();
export default App = () =>{


  

  const AuthStack = () =>{
    return (
      <Stack.Navigator >
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register} options={{headerBackTitle:"Login",headerTitle:"",headerTintColor:colors.black}}/>
      </Stack.Navigator>
    )
  }

  return(
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Auth Stack" component={AuthStack}  />
      {/* <Stack.Screen name="Register" component={Register} /> */}
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  )

  }


