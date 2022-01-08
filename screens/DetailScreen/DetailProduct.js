import React, { Component, useState, useEffect} from 'react';
import { 
  Text, 
  View, 
  ScrollView, 
  Image,
  TouchableOpacity,
  Touchable,
  StyleSheet,
  useWindowDimensions 
 } from 'react-native';
import AnimatedHeader from 'react-native-animated-header';
import  { 
  Fontisto, 
  FontAwesome,
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons
} from '@expo/vector-icons';//icon
import {
    API_URL,
    API_TOKEN
} from '@env'// Environment variable
import Colors from '../../theme/Colors';
import Star from 'react-native-star-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/Custom/Button'
import axios from "axios";

export default function DetailProduct({route, navigation }){
  const [accesstoken, setAccessToken] = useState()
  const [countItemCart, setCountItemCart] = useState(0)
  const [isLoading, setLoad] = useState(true)
  AsyncStorage.getItem('access_token').then(accesstoken => {setAccessToken(accesstoken)})

  const {_v, _id, category, description, img, name, price } = route.params.item 
  
  const dataProduct = {
    cartItems: [
        {
            product: _id,
            quantity: 1,
            price: price,
            payment: price
        }
    ]
  }
  useEffect(() => {
    async function getCartItems (){
      const url_get_count =  API_URL + '/api/user/get-cart'
      const res = await axios.get(url_get_count,{
            headers: { Authorization: 'Bearer ' + accesstoken }
          })
      return res
    }
    getCartItems().then((res)=> {  
        const result = res.data
        const {success, cartItems, allPayMent, countItem} =result
        if(success == true){
          console.log(result)
          setCountItemCart(countItem)
        }else{
          console.log(result)
          setLoad(false)
        }
    }).catch(error => {
        console.log(error.JSON) 
        setLoad(false)
             
    })
    
    
  },[setLoad])
  async function postProductToCart () {
        const url =  API_URL + '/api/user/add-to-cart'
        await axios.post(url,dataProduct,{
          headers: { 
            Authorization: 'Bearer ' + accesstoken ,
            "content-type": "application/json" 
          },
        }).then((response)=> {  
          console.log(response.data)  
          setLoad(false)
        })
        .catch(error => {
          console.log(error)
           setLoad(false)
        })
    }
    const AddEndRemove = () => {
      return(
        <View style={styles.button_pay}>
          <View style={{backgroundColor:Colors.bghome, alignItems: 'center'}}>
            <TouchableOpacity style={{justifyContent: 'center', margin: 5 }}>
              <Ionicons name="remove" size={24} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <View style={{ flex:1, alignItems: 'center',justifyContent: 'center'}}>
            <Text>1</Text>
          </View>
          <View style={{backgroundColor:Colors.bghome, alignItems: 'center' }}>
            <TouchableOpacity style={{justifyContent: 'center',  margin: 5}}>
              <Ionicons name="add" size={24} color={Colors.white} />
            </TouchableOpacity> 
          </View>
          
        </View>
      )
    }
    return (
       <AnimatedHeader 
        style={{flex: 1, marginTop:40 }}
        renderLeft={() => (
          <TouchableOpacity  onPress={()=> navigation.goBack()}>
            <View style={{margin:20, marginTop:20, alignItems:'center'}}>
              <Ionicons name="arrow-back" size={36} color={Colors.dark} />
            </View>
          </TouchableOpacity>
  
        )}
        renderRight={() => (
          <TouchableOpacity onPress={()=> navigation.navigate('CartScreen')}>
            <View style={{margin:20, marginTop:20, alignItems:'center' }}>
              <Ionicons name="cart" size={30} color={Colors.dark} />
              <View style={styles.viewCount}>
                <Text style={styles.textCount}>{countItemCart}</Text>
              </View>
            </View>
            
          </TouchableOpacity>

        )}
        backStyle={{ marginLeft: 10 }}
        backTextStyle={{fontSize: 14, color: '#ffff'}}
        titleStyle={{ fontSize: 22, left: 20, bottom: 20, color: '#ffff' }}
        headerMaxHeight={200}
        imageSource={{uri:img}}
        toolbarColor='#FFF'
        disabled={false}
      >
     
        <ScrollView>
          <View style={styles.container_title_top}>
            <View style={styles.container_center}>
              <View style={styles.title}>
                <Text style= {styles.name}>{name}</Text>
                <Text>{description}</Text>
                <View style={styles.subTitle}>
                  <Text><Star score={4.5} style={styles.starStyle} /> 4.5 (20 Bình Luận)</Text>
                  <View style={styles.iconHeart} >
                    <TouchableOpacity>
                      <AntDesign  name="heart" size={24} color={Colors.darkLight} />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>    
          </View>
          <View style={styles.container_title_center}>
            <View style={styles.container_center}>
              <Text style={{fontSize:20, marginBottom:10}}>Thông Tin Chi Tiết :</Text>
              <Text> <FontAwesome name="map-marker" size={20} color={Colors.red1} />   Tổ 40, Hòa Qúy,Hòa Hải, Ngũ Hành Sơn, Đà Nẵng</Text>   
              <Text><Feather name="phone-call" size={20} color={Colors.green_phone} />   0386236067</Text> 
            </View>   
          </View>
          <View style={{flexDirection: 'row'}}> 
            <AddEndRemove/>
            <TouchableOpacity style={styles.buttonAddCart} onPress={postProductToCart}>
              <Text style={{color: Colors.primary,fontSize: 16 }}>Thêm vào giỏ hàng - {price} đ</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.container_comment}>
            <View style={styles.container_center}>
              <Text style={{fontSize:18}}>Các bài đánh giá</Text> 
            </View>
          </View>
         
        </ScrollView>
      </AnimatedHeader>
    );
}

const styles = StyleSheet.create({
    container_title_top: {
      flex: 1,
      backgroundColor: Colors.primary
    },
    container_title_center: {
      flex: 1,
      marginTop: 10,
      backgroundColor: Colors.primary
    },
    container_comment: {
      flex: 1,
      backgroundColor: Colors.primary
    },
    viewCount: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: 15,
      width: 15,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.red

    },
    textCount: {
      alignItems: 'center',
      justifyContent: 'center',
      color: Colors.white,
      fontSize:10
    },
    container_center: {
      flex: 1,
      marginTop: 10,
      margin: 10,
    },
    buttonAddCart: {
      padding:15,
      backgroundColor:Colors.bghome,
      height: 40,
      margin: 10,
      justifyContent: 'center',
      alignContent: 'center',

    },
    
    button_pay: {
      flexDirection: 'row',
      margin: 10,
      backgroundColor: Colors.secondary,
      width: 100,
      height: 40,
      justifyContent: 'center',
      alignContent: 'center',
    },
    
    subTitle:{
      alignItems: 'center',
      flexDirection: 'row',
    },
    iconHeart:{
      position: 'absolute',
      right: 0
    },
    name: {
      fontSize:20,
      fontWeight: 'bold',
      alignItems: 'center',
      color:'#1F2937'
    },
    starStyle : {
      width: 100,
      height: 20,
      marginBottom: 20,

    }
})
