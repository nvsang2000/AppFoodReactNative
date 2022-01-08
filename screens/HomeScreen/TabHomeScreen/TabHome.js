import React, { Component, useState, useEffect } from 'react';

import {
    View,
    Text,
    TextInput,
    FlatList,
    SafeAreaView
} from "react-native"
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {
     API_URL,
     API_TOKEN
 } from '@env'// Environment variable
import Fonts from '../../../theme/Fonts';
//icon
import  {Octicons, Ionicons, Fontiso, FontAwesome} from '@expo/vector-icons';
import { style } from '../styles/styleTabHome';
import axios from 'axios';
import Colors from '../../../theme/Colors';
import SearchBar from './SearchBar'
import SlideBanner from './SlideBanner'
import ListProduct from './ListProduct'

export default function TabHome()  {
    const [products, setProducts] = useState([])
    const [categories, setCategory] =useState([])
    const [itemCategory, setItemCategory] =useState("1")

    const url_product =  API_URL + '/api/product/get/'+itemCategory
    const url_category =  API_URL + '/api/category/get'

    useEffect(() => {
        async function getProducts() {
            const res = await axios.get(url_product)
            return res
        }
        async function getCategory(){
            const res = await axios.get(url_category)
            return res
        }
        getProducts().then((response) => {
            const result = response.data
            setProducts(result) 
        }).catch(error => { console.log(error.JSON) })

        getCategory().then((response)=>{
            const result = response.data
            setCategory(result)
        })
        
        
  },[itemCategory])
    return (
        <View style={{ flex: 1, marginTop:40 }}>
            <View  forceInset={{ top: 'always' }} style={style.containerFull}>
                <View style={style.container}>
                    <Text style={style.titleAddress}> Tổ 40, phường hòa hải, quận ngũ hành sơn</Text> 
                </View>
                <SearchBar/>
            </View>
            <SlideBanner/>
            <ListCategory />
            <ListProduct products={products}/> 

            
        </View>
            
    )
    function ListCategory (){
        const renderCategories = (item, index) => {
            return (
            <TouchableOpacity onPress={ ()=> setItemCategory(item._id)}
                style={{
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "#fff",
                borderRadius: 50,
                paddingHorizontal: 12,
                paddingVertical: 7,
                marginLeft: 5
                }}
            >
                <Text
                style={{
                    fontSize: 16,
                    marginRight: 3
                }}
                >
                {item.name}
                </Text>
            </TouchableOpacity>
            );
        }
        return(
        <View >
          <View
            style={{ backgroundColor: "#fff" }}
          >

            <View
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10
              }}
            >
              <FlatList
                horizontal
                nestedScrollEnabled = {true}
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={item => item._id.toString()}
                renderItem={({ item, index }) => renderCategories(item,index)}
              />
            </View>
          </View>
        </View>
        )
    }
}
