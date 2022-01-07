import React, { Component, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {
     API_URL,
} from '@env'// Environment variable
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function() {
  const navigation = useNavigation();
  const [products, setProducts] = useState([])
  const url =  API_URL + '/api/product/get'
  useEffect(() => {
    async function getProducts() {
      const res = await axios.get(url)
      return res
    }
    getProducts()
      .then((response) => {
          const result = response.data
          setProducts(result) 
          console.log(products)
  
        })
      .catch(error => {
          console.log(error.JSON)
      })

  },[])
  const renderProduct =(item)=>{
    return (
        <View style={styles.card}>
          <TouchableOpacity onPress={() => navigation.navigate('DetailProduct',{item})}>
            <Image style={styles.cardImage} source={{uri:item.img}}/>
            
            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>{item.price} Đ</Text>
              </View>
            </View>
          </TouchableOpacity>
          
        </View>      
      )
  }
  return (
    <View style={styles.container} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin: 10}}>
          <Text>Thịnh Hành</Text>
          
          <TouchableOpacity >
            <Text>Xem Thêm</Text>
          </TouchableOpacity>
        </View>
        <FlatList 
          horizontal={false}
          numColumns={2}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={products}
          keyExtractor= {(item) =>  item._id.toString()}
          renderItem={({item}) => renderProduct(item) }/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"white",
    flexBasis: '47%',
    marginHorizontal: 5,
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    flex: 1,
    height: 150,
    width: null,
  },
  /******** card components **************/
  title:{
    fontSize:18,
    flex:1,
  },
  price:{
    fontSize:16,
    color: "green",
    marginTop: 5
  },

});   