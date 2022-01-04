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
            <Image style={styles.cardImage} source={{uri:item.avata}}/>
            <View style={styles.cardContain}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>25 000đ</Text>
            </View>
          </TouchableOpacity>
        </View>      
      )
  }
  return (
    <View style={styles.container} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between',margin: 10}}>
          <Text>Thịnh Hành</Text>
          
          <TouchableOpacity onPress={() => navigation.navigate('DetailProduct')}>
            <Text>Xem Thêm</Text>
          </TouchableOpacity>
        </View>
        <FlatList 
          horizontal
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={products}
          nestedScrollEnabled = {true}
          keyExtractor= {(item) =>  item._id.toString()}
          renderItem={({item}) => renderProduct(item) }/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    marginTop:5,
  },
  list: {
    backgroundColor:"#E6E6E6",
  },
  listContainer:{
    alignItems:'center'
  },
  listHeader: {
    alignItems:'center'
  },
  separator: {
    marginTop: 10,
  },
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
  cardImage:{
    flex: 1,
    height: 150,
    width: 150,
  },
  cardContain: {
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:18,
    flex:1,
    fontWeight: 'bold',
    alignItems: 'center',
    color:'#1F2937'
  },
  price: {
    fontSize:18,
    flex:1,
    fontWeight: 'bold',
    alignItems: 'center',
    color: '#EF4444'
  }
});  