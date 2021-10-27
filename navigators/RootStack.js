import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/LoginScreen/Login';
import Signup from '../screens/RegisterScreen/Singup';
import Home from '../screens/HomeScreen/Home';
import Splash from '../screens/SplashScreen/Splash';
import TabProfile from '../screens/HomeScreen/TabProfile';


import Colors from '../theme/Colors';
const  Stack = createNativeStackNavigator()

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name= "TabProfile" component={TabProfile}/>
                <Stack.Screen name= "Splash" component={Splash}/>
                <Stack.Screen name= "Login" component={Login}/>
                <Stack.Screen name= "Signup" component={Signup}/>
                <Stack.Screen name= "Home" component={Home}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;