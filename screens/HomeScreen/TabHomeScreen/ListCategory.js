import React, {Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList
} from "react-native";
import {
     API_URL,
     API_TOKEN
 } from '@env'// Environment variable
 import axios from "axios";

 const renderCategories = (item, index) => {
    return (
      <TouchableOpacity
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

export default class ListCategory extends Component {
  constructor(prop){
    super(prop)
    this.state={
      Category : []
    }
    url =  API_URL + '/api/category/get'
    axios({   
          method: 'get',
          url: url,
    }).then((response) => {
          const result =  response.data
          //console.log(result)
          this.setState({Category : result})
          
    }).catch(error => {
          console.log(error.JSON)
    }) 

  }

  render(){
    const {Category} = this.state
    //console.log(Category)

    return (
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
                data={Category}
                keyExtractor={item => item._id.toString()}
                renderItem={({ item, index }) => renderCategories(item,index)}
              />
            </View>
          </View>
        </View>
      )
  } 
}


