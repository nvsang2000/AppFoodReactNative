import React, { Component } from 'react';

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
    Entypo
} from '@expo/vector-icons';//icon

export default function (props){
    const navigation = useNavigation();

    return <GetSearch {...props} navigation={navigation}/> 
}
class GetSearch extends Component {
    constructor(prop){
        super(prop)
        this.state={
            
            Product : []
        }
        this.state={
            KeySearch : ""
        }
        console.log(this.state.KeySearch)
        getKey = (key) => {
            url =  API_URL + '/api/search-key'
            headers = {
                'Content-Type': 'application/json',
            }
            axios.post( url, {
                headers: headers,
                key
            }).then((response) => {
                const result =  response.data
                
                this.setState({Product : result})
                //console.log(result)   
            }).catch(error => {
                    console.log(error.JSON)
            })
        }
    }
    render(){
        const key = this.state.KeySearch
        const { navigation } = this.props
        if(key == ''){
            console.log("key null")
        }else{
            getKey(key)
        }
        const renderProduct =(item, index)=>{
            return (
                <View style={styles.card}> 
                <TouchableOpacity onPress={() => navigation.navigate('DetailProduct',{item})}>       
                    <Image style={styles.cardImage} source={{uri:item.avata}}/>
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
                    <View style={styles.searchContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.vwSearch}>
                                <Entypo style={styles.icSearch}  name="arrow-long-left" size={24} color="black" />
                            </View>
                        </TouchableOpacity>
                        <TextInput
                        style={styles.textInput}
                        onChangeText={
                            text => setTimeout(
                                function() {
                                    this.setState({KeySearch : text})
                                }.bind(this),1000
                                )
                            }
                        placeholder="  Enter Search ..."
                        
                        />
                    </View>
                
                </View>
                <View>
                    <FlatList 
                        style={styles.list}
                        contentContainerStyle={styles.listContainer}
                        data={this.state.Product}
                        horizontal={false}
                        numColumns={2}
                        keyExtractor= {(item) =>  item._id.toString()}
                        renderItem={({item, index, navigation}) => renderProduct(item, index) }/>
                </View>
            </SafeAreaView>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding:5,
        flexDirection: 'row',
        marginTop:10
    },  
    searchContainer:{
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        flexDirection: 'row'

    },
    vwSearch: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icSearch: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    
     textInput: {
        // backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.secondary,
        color: Colors.black
        
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
