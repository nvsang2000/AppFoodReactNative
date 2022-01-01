import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/LoginScreen/Login';
import Signup from '../screens/RegisterScreen/Singup';
import Home from '../screens/HomeScreen/Home';
import Splash from '../screens/SplashScreen/Splash';
import TabProfile from '../screens/HomeScreen/TabProfileScreen/TabProfile';
import EditProfile from '../screens/HomeScreen/TabProfileScreen/EditProfile';
import DetailProduct from '../screens/DetailScreen/DetailProduct';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import CartScreen from '../screens/HomeScreen/TabCartScreen/CartScreen'


import Colors from '../theme/Colors';
const  Stack = createNativeStackNavigator()

export default function RootStack(){
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Splash"
            >
                <Stack.Screen name= "Splash" component={Splash}/>
                <Stack.Screen name= "Login" component={Login}/>
                <Stack.Screen name= "Signup" component={Signup}/>
                <Stack.Screen name= "Home" component={Home}/>
                <Stack.Screen name= "TabProfile" component={TabProfile}/>
                <Stack.Screen name= "EditProfile" component={EditProfile}/>
                <Stack.Screen name= "DetailProduct" component={DetailProduct}/>
                <Stack.Screen name= "SearchScreen" component={SearchScreen}/>
                <Stack.Screen name= "CartScreen" component={CartScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}