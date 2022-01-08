import React, { Component, useEffect, useState } from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    FlatList,
    TouchableOpacity
} from "react-native"
import {
     API_URL,
     API_TOKEN
 } from '@env'// Environment variable
import axios from "axios";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../theme/Colors';

import  { 
  Fontisto, 
  FontAwesome,
  Entypo,
  Ionicons,
  Feather,
  AntDesign,
  MaterialIcons
} from '@expo/vector-icons';//icon

export default function (props){
    const navigation = useNavigation();
    const [product, setProduct] = useState([])
    const [KeySearch, setKeySearch] = useState("")

    
    const dataProduct = {
        key: KeySearch
    }
    async function getKey () {
        const url =  API_URL + '/api/search-key'
        await axios.post(url,dataProduct,{
            headers: { 
                "content-type": "application/json"
            },
        }) 
        .then((response)=> {
            const result = response.data
            const {success, product} = result
            if(success == true){
                setProduct(product)
            }else{
                console.log("search fail")
            }
            })
        .catch(error => {
            console.log(error)
        })
    }
    
    const renderProduct =(item, index)=>{
        return (
            <View style={styles.card}> 
            <TouchableOpacity onPress={() => navigation.navigate('DetailProduct',{item})}>       
                <Image style={styles.cardImage} source={{uri:item.img}}/>
                <View style={styles.cardContain}>
                    <Text style={styles.title}>{item.name}</Text>
                </View>
            </TouchableOpacity>
            </View>      
        )
    }
    return (
        <SafeAreaView>
            <View style={styles.container} >
                <View 
                    style={{
                        flexDirection: 'row',
                        marginBottom: 10
                    }}
                >
                    <View>
                        <TouchableOpacity  onPress={()=> navigation.goBack()}>
                            <View style= {{alignContent: 'center'}} >
                                <Entypo style={styles.icSearch}  name="arrow-long-left" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginLeft: 20 }}>
                        <Text style={{fontSize: 20}}>Tìm Kiếm sản phẩm</Text>
                    </View>
                    <View style={{right:20, position: 'absolute',}}>
                        <TouchableOpacity   onPress={getKey}>
                            <FontAwesome name="search" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    
                    
                </View>
                <View style={styles.searchContainer}>
                    
                    <View 
                        style={{
                            width: "100%", 
                            height: 50, 
                            backgroundColor: Colors.white,
                            borderRadius: 8,
                            
                        }}
                    >
                        <TextInput
                            style={styles.textInput}
                            onChangeText={ text => setKeySearch(text) }
                            placeholder="  Enter Search ..."
                        
                        />
                    </View>

                    
                </View>
            
            </View>
            <View>
                <FlatList 
                    style={styles.list}
                    contentContainerStyle={styles.listContainer}
                    data={product}
                    horizontal={false}
                    numColumns={2}
                    keyExtractor= {(item) =>  item._id.toString()}
                    renderItem={({item, index, navigation}) => renderProduct(item, index) }/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        margin:10,
        flexDirection: 'column',
        marginTop:10
    },  
    searchContainer:{
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        flexDirection: 'row'

    },
     textInput: {
        // backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.secondary,
        color: Colors.black,
        paddingLeft: 10,
        fontSize: 18
        
    },
    // flat list
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
        width: null,
    },
    cardContain: {
        margin:10
    },
    title:{
        fontSize:18,
        flex:1,
    },
        
});
