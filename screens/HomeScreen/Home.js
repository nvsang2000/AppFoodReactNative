import React from 'react';
import { StatusBar } from "expo-status-bar";
import {
  Colors,
}from '../../components/styles'//style custom

import { 
    View,
    

} from "react-native";//style react native

import  { 
  Fontisto, 
  FontAwesome
} from '@expo/vector-icons';//icon

//tab bottom
import TabHome from "./TabHome";
import TabProfile from "./TabProfile";
import TabNotification from './TabNotification';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

import {setData, accessToken} from '../../components/Storages/Storage';

const Tab = createBottomTabNavigator();

const Home = ({route, navigation}) => {
  const {_v, _id, createdAt, email, password, username} = route.params

  if(password == '' || email == '' || username == '' || _id == ''){
    console.log('data null') 
  }else{
    setData(_id,createdAt, email, password, username)
  }
    return(
        <Tab.Navigator
          screenOptions={{
            headerShown: false
          }}
      >
        <Tab.Screen 
          name="TabHome" 
          component={TabHome}
          options={{
            tabBarLabel: 'Trang Chủ',
            tabBarIcon: ({ color }) => (
                <FontAwesome name="home" color={color} size={26} />
          )}} 
        />
        <Tab.Screen 
          name="TabNotification" 
          component={TabNotification}
          options={{
            tabBarLabel: 'Thông Báo',
            tabBarIcon: ({ color }) => (
              <Fontisto name="bell" size={24} color="black" />
          )}} 
        />
        <Tab.Screen 
          name="TabProfile" 
          component={TabProfile}
          options={{
            tabBarLabel: 'Tôi',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" color={color} size={26} />
          )}} 
          />
        </Tab.Navigator>
      
    )
}

export default Home;