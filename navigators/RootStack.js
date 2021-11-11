import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/LoginScreen/Login';
import Signup from '../screens/RegisterScreen/Singup';
import Home from '../screens/HomeScreen/Home';
import Splash from '../screens/SplashScreen/Splash';
import TabProfile from '../screens/HomeScreen/TabProfile';
import EditProfile from '../screens/HomeScreen/TabProfileScreen/EditProfile';
import Pay from '../screens/HomeScreen/TabProfileScreen/Pay';
import Custormerhelp from '../screens/HomeScreen/TabProfileScreen/Custormerhelp';

import Colors from '../theme/Colors';
const  Stack = createNativeStackNavigator()

const RootStack = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="TabProfile"
            >
                <Stack.Screen name= "Splash" component={Splash}/>
                <Stack.Screen name= "Login" component={Login}/>
                <Stack.Screen name= "Signup" component={Signup}/>
                <Stack.Screen name= "Home" component={Home}/>
                <Stack.Screen name= "TabProfile" component={TabProfile}/>
                <Stack.Screen name= "EditProfile" component={EditProfile}/>
                <Stack.Screen name= "Pay" component={Pay}/>
                <Stack.Screen name= "Custormerhelp" component={Custormerhelp}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default RootStack;