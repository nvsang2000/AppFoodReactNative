import React, {useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign,Entypo,FontAwesome5,Ionicons } from '@expo/vector-icons';
import Colors from "../../theme/Colors";
import{
   style

} from "../../components/styleProfile"

import { 
     SafeAreaView, 
     ScrollView, 
     View,
     Text,
     Image
 } from "react-native";
 import { 
      StyledButton,
      ButtonText

} from "../../components/styles";
import {
     API_URL,
     API_TOKEN
 } from '@env'// Environment variable
import { accessToken, removeToken} from '../../components/Storages/Storage';
import axios from "axios";

const Action = ({title,icon, screen}) => {
     return(
          <View style={style.action} >
               <View style={style.rowAction}>
                    <View style={style.iconContainer}>
                         <FontAwesome5 name={icon} color={Colors.brand} size={26}/>
                    </View>
                    <Text style={style.actionTitle} title>
                         {title}
                    </Text>
                    
               </View>
               <Entypo  style={style.iconRight} name="chevron-small-right" size={24} color="black" />
               
          </View>
     )
}

const url =  API_URL + '/api/auth/logout'
const TabProfile = ({navigation}) => {
     const [username, setusername] = useState()
     const [email, setemail] = useState()
     const [message, setMessage] = useState()
     const [accesstoken, setAccessToken] = useState()

     AsyncStorage.getItem('username').then(username => {
          setusername(username)
     });
     AsyncStorage.getItem('email').then(email => {
          setemail(email)
     })
     AsyncStorage.getItem('access_token').then(accesstoken => {
          setAccessToken(accesstoken)
     })
     const Logout = () => {
          axios.get(url,{
               headers: {
                    Authorization: 'Bearer ' + accesstoken
               }
          }).then((response) => {
               const result = response.data
               const{success,message} =result
               if(success == true){
                    console.log(result)
                    removeToken()
                    navigation.navigate('Login') 
               }else{
                    console.log('logout fail')
               }
               
          }).catch(error => {
               console.log(error.JSON)
          }) 
     }

     return (
          <SafeAreaView style={style.container}>
               <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 29}}>
                    <View style={style.profile} >
                         <View style={style.image}>
                              <Image style={style.image} source={require('../../assets/canhan.jpg')}/>
                         </View>
                         <View style= {style.nameSection}>
                              <Text style={style.username}>{username}</Text>
                              <Text style={style.email}>{email}</Text>
                         </View>
                    </View> 
                    <View style={style.actions}>
                         <Action title={'Địa Chỉ'} icon={'map-marker'}/>
                         <Action title={'Thanh Toán'} icon={'paypal'}/>
                         <Action title={'Các Hóa Đơn'} icon={'shopping-bag'}/>
                         <Action title={'Chỉnh sửa thông tin'} icon={'user-edit'}/>
                         <Action title={'Trợ giúp khách hàng'} icon={'question'}/>
                    </View>
                    <StyledButton onPress={Logout}>
                         <ButtonText  >
                              LogOut
                         </ButtonText>
                    </StyledButton> 
               </ScrollView>
          </SafeAreaView>
     )
};

export default TabProfile;