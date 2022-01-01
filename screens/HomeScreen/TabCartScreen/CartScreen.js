import React, {Component, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import  { 
  Fontisto, 
  FontAwesome,
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons
} from '@expo/vector-icons';//icon
import COLORS from '../../../consts/colors';
import foods from '../../../consts/foods';
import {PrimaryButton} from '../../../components/Button';
import {
     API_URL,
} from '@env'// Environment variable
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function(props) {
  const [accesstoken, setAccessToken] = useState()
  AsyncStorage.getItem('access_token').then(accesstoken => {
          setAccessToken(accesstoken)
    })
  return <CartScreen {...props} token={accesstoken}/>

}

class CartScreen extends Component {
  constructor(props){
    super(props)
    this.state={
      CartItems : []
    }

    const url =  API_URL + '/api/user/get-cart'
    const { accesstoken } = this.props
    axios.get(url,{
        headers: {
              Authorization: 'Bearer ' + accesstoken
        }
    })
    .then((response)=> {  
      const result = response.data
      this.setState({CartItems: result})
    })
    .catch(error => {
      console.log(error.JSON)      
    })
  }
  render(){
    const {Cart} = this.state
    console.log(Cart)
    const CartCard = ({item}) => {
      return (
            <View style={style.cartCard}>
              <Image source={item.image} style={{height: 80, width: 80}} />
              <View
                style={{
                  height: 100,
                  marginLeft: 10,
                  paddingVertical: 20,
                  flex: 1,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
                <Text style={{fontSize: 13, color: COLORS.grey}}>
                  {item.ingredients}
                </Text>
                <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
              </View>
              <View style={{marginRight: 20, alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text>
                <View style={style.actionBtn}>
                  <Ionicons name="remove" size={24} color={COLORS.white} />
                  <Ionicons name="add" size={24} color={COLORS.white} />
                </View>
              </View>
            </View>
          );
      };
    return(
      <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>Giỏ Hàng Của Tôi</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foods}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$50</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <TouchableOpacity >
                <PrimaryButton title="CHECKOUT" />
              </TouchableOpacity>
              
            </View>
          </View>
        )}
      />
    </SafeAreaView>

    )
  }
}

const style = StyleSheet.create({
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
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

