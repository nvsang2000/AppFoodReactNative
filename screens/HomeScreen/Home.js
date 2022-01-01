import React from 'react';
import { StatusBar } from "expo-status-bar";
import { 
    View,
} from "react-native";//style react native

import  { 
  Fontisto, 
  FontAwesome,
  EvilIcons
} from '@expo/vector-icons';//icon

//tab bottom
import TabHome from "./TabHomeScreen/TabHome";
import TabProfile from "./TabProfileScreen/TabProfile";
import CartScreen from './TabCartScreen/CartScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {setData, accessToken} from '../../components/Storages/Storage';
import Colors from '../../theme/Colors';


const Tab = createMaterialBottomTabNavigator();

export default function Home({route, navigation}){
  const {_v, _id, createdAt, email, password, username} = route.params

  if(password == '' || email == '' || username == '' || _id == ''){
    console.log('data null') 
  }else{
    setData(_id,createdAt, email, password, username)
  }
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: Colors.primary }}
      screenOptions={{
            headerShown: false
          }}
    >
      <Tab.Screen
        name="TabHome"
        component={TabHome}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          tabBarLabel: 'Giỏ Hàng',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="cart-arrow-down" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TabProfile"
        component={TabProfile}
        options={{
          tabBarLabel: 'Bạn',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
