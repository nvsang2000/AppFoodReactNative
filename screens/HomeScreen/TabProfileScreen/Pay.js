import React, {useState} from "react";
import{style} from "../styles/stylePay";
import { AntDesign } from '@expo/vector-icons';
import { 
     SafeAreaView, 
     View,
     Text,
     TouchableOpacity,
     ScrollView,
 } from "react-native";

 const Pay = ({navigation}) => {
     return(
        <SafeAreaView style={style.container}>
            <ScrollView >
                    <View style={style.body} >
                        <View style={{ backgroundColor: "white", flex: 0.4 }}>
                             <View style={style.profile}>
                                <TouchableOpacity style={style.styleTO} onPress={() => navigation.goBack()}>
                                     <AntDesign name="arrowleft" size={24} color="black" />
                                    <Text  style={style.textnameTT}>Thanh toán</Text>
                                </TouchableOpacity>
                             </View>
                        </View>
                        <View style={{ backgroundColor: "#EAE0E0", flex: 4 }}>
                            <View>
                                <TouchableOpacity  style={style.inputT}>
                                    <Text  style={style.textname}>Ví điện tử</Text>  
                                    <AntDesign name="right" style={style.icon} />                 
                                </TouchableOpacity>
                                <View style={style.hr} /> 
                                <TouchableOpacity  style={style.inputT}>
                                    <Text  style={style.textname}>Thẻ Tín dụng/ Ghi nợ</Text>  
                                    <AntDesign name="right" style={style.icon} />                 
                                </TouchableOpacity>
                                <View style={style.hr} /> 
                                <TouchableOpacity  style={style.inputT}>
                                    <Text  style={style.textname}>Thanh toán khi nhận hàng</Text>  
                                    <AntDesign name="right" style={style.icon} />                 
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </ScrollView>
        </SafeAreaView>
     );
    }
export default Pay;
