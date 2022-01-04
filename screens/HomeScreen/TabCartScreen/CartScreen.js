import React, {useState, useEffect} from 'react';
import {
  SafeAreaView, 
  StyleSheet, 
  View, 
  Text, 
  Image,
  Dimensions 
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import  { 
  Fontisto, 
  FontAwesome,
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons
} from '@expo/vector-icons';//icon
import Colors from '../../../theme/Colors';
import { 
      StyledButton,
      ButtonText

} from "../../../components/styles";
import {
     API_URL,
} from '@env'// Environment variable
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function(props) {
  const [cartItem, setCartItem] = useState([])
  const [accesstoken, setAccessToken] = useState()
  const [isLoading, setLoad] = useState(true)
  const [allPayMent, setAllPayMent] = useState()


  AsyncStorage.getItem('access_token').then(accesstoken => {setAccessToken(accesstoken)})
  useEffect(() => {
    let abortController = new AbortController(); 
    const url =  API_URL + '/api/user/get-cart'
    async function getCartItems (){
      const res = await axios.get(url,{
            headers: { Authorization: 'Bearer ' + accesstoken }
          })
      return res
    }
    getCartItems().then((res)=> {  
        const result = res.data
        const {success, cartItems, allPayMent} =result
        if(success == true){
          setCartItem(cartItems) 
          setAllPayMent(allPayMent)
        }else{
          console.log("server fail")
          setLoad(false)
        }
        
    }).catch(error => {
        console.log(error.JSON) 
        setLoad(false)
             
    })
    

    return () => {  
      abortController.abort();  
    } 
    
  }, [isLoading])
 
  function renderCart(item) {
    return (
      <View style={styles.cartCard}>
        <Image source={{uri: item.product.avata}} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.product.name}</Text>
          <Text style={{fontSize: 13, color: Colors.grey}}>
            
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>{item.price}đ</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>{item.quantity}</Text>
          <View style={styles.actionBtn}>
            <Ionicons name="remove" size={24} color={Colors.white} />
            <Ionicons name="add" size={24} color={Colors.white} />
          </View>
        </View>
      </View>
  )}
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Giỏ Hàng Của Tôi</Text>
        </View>
        <FlatList 
          data={cartItem}
          Horizontal
          keyExtractor= {(item) => item._id.toString() }
          renderItem={({item,  props}) => renderCart(item, props)}
          
          />
        <View style={{margin: 20}}>
          <View 
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
            }}
          >
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>
              Total Price
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{allPayMent} đ</Text>
          </View>
          <View >
            <StyledButton >
                <ButtonText  >
                    Thanh Toán
                </ButtonText>
            </StyledButton> 
            
          </View>
        </View>
          
      </View>
      
)}
const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: Colors.button_pay,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});  
       
