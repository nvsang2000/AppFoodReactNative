import React from 'react';
import { StatusBar } from "expo-status-bar";
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
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {setData, accessToken} from '../../components/Storages/Storage';
import Colors from '../../theme/Colors';


const Tab = createMaterialBottomTabNavigator();

const Home = ({route, navigation}) => {
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
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="TabNotification"
        component={TabNotification}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <Fontisto name="bell" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TabProfile"
        component={TabProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Home;