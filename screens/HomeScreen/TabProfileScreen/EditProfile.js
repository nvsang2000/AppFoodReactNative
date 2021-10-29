import React, {useState} from "react";
import { Formik } from 'formik';
import{style} from "../styles/styleEditProfile";
import { AntDesign } from '@expo/vector-icons';
import { 
     SafeAreaView, 
     View,
     Text,
     Image,
     TextInput,
     TouchableOpacity,
     ScrollView,
 } from "react-native";

 const EditProfile = ({navigation}) => {
     return(
        <SafeAreaView style={style.container}>
            <ScrollView >
               <Formik
                    initialValues={{ email: '' }}
                    onSubmit={values => console.log(values)}
               >
                   {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <View style={style.profile}> 
                                <TouchableOpacity style={style.styleTO} onPress={() => navigation.goBack()}>
                                    <AntDesign name="left" size={24} color="#6D28D9" />
                                    <Text >Chỉnh sửa thông tin</Text>
                                </TouchableOpacity>
                                <View style={style.hr}></View>
                                <View >
                                    <Image style={style.image} source={require('../../../assets/Img/profile.jpg')}/>
                                </View>
                                <View>
                                    <TouchableOpacity style={style.buttonIMG}>
                                        <Text style={style.textbutton}>Choose IMG </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={style.actions}>
                                <Text style={style.username}> Họ và tên </Text>
                                <TextInput style={style.input} />
                                <Text style={style.username}> Số điện thoại </Text>
                                <TextInput style={style.input} />
                                <Text style={style.username}> Email </Text>
                                {/* <TextInput style={style.input} /> */}
                                <View style={style.input}> 
                                    <Text>Canny@gmail.com</Text>
                                </View>
                                <Text style={style.username}> Password </Text>
                                <TextInput style={style.input} />
                            </View>
                            <TouchableOpacity style={style.button}>
                                <Text style={style.textbutt}>Lưu Thông Tin  </Text>
                            </TouchableOpacity>
                        </>
                   )}
               </Formik>
            </ScrollView> 
        </SafeAreaView>
     )
 };
 export default EditProfile;