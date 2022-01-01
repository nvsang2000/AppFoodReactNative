import React, { Component
 } from 'react';
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
import Colors from '../../theme/Colors';
import Star from 'react-native-star-view';
import CustomButton from '../../components/Custom/Button'

export default function DetailProduct({route, navigation }){
    const {_v, _id, avata, description, name} = route.params.item 
    
    return (
       <AnimatedHeader 
        style={{flex: 1 }}
        renderLeft={() => (
          <TouchableOpacity  onPress={()=> navigation.goBack()}>
            <View style={{margin:10, marginTop:20, alignItems:'center' }}>
              <Ionicons name="arrow-back" size={24} color="#ffff" />
            </View>
          </TouchableOpacity>
  
          )}
        backStyle={{ marginLeft: 10 }}
        backTextStyle={{fontSize: 14, color: '#ffff'}}
        titleStyle={{ fontSize: 22, left: 20, bottom: 20, color: '#ffff' }}
        headerMaxHeight={200}
        imageSource={{uri:avata}}
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
              <Text><Feather name="phone-call" size={20} color={Colors.green_phone} />    0386236067</Text> 
              <Text><MaterialIcons name="attach-money" size={20} color={Colors.bghome} />   25 000đ -30 000đ</Text> 
            </View>   
          </View>
          <View style={styles.button_pay}>
              <CustomButton onPress={()=> navigation.navigate('CartScreen')} title='Mua Ngay'/>  
          </View>
          <View style={styles.container_title_center}>
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
    container_center: {
      flex: 1,
      marginTop: 10,
      margin: 10,
    },
    
    button_pay: {
      marginTop: 10
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
