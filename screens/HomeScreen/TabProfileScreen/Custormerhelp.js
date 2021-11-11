import React, {useState} from "react";
import { Formik } from 'formik';
import{style} from "../styles/styleHelp";
import { AntDesign } from '@expo/vector-icons';
import { 
     Text,
     SafeAreaView, 
     View,
     TextInput,
     TouchableOpacity,
     ScrollView,
 } from "react-native";

 const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={500}
      />
    );
  }
  
 const Custormerhelp= ({navigation}) => {
    const [value, onChangeText] = React.useState('Xin chào,');

    return(
    <SafeAreaView style={style.container}>
            <ScrollView >
                <Formik>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                                        
                    <View style={style.body} >
                    <View style={{ backgroundColor: "white", flex: 0.4 }}>
                        <View style={style.profile}>
                            <TouchableOpacity style={style.styleTO} onPress={() => navigation.goBack()}>
                                <AntDesign name="arrowleft" size={24} color="black" />
                                <Text  style={style.textnameTT}>Trợ giúp khách hàng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ backgroundColor: "#EAE0E0", flex: 4 }}>
                        <View>
                            <Text style={style.textG}> Gmail : </Text>
                        </View>
                        <View style={style.input}>
                            <UselessTextInput
                                multiline
                                numberOfLines={4}
                                onChangeText={text => onChangeText(text)}
                                value={value}
                                style={{padding: 10}}
                            />
                            </View>
                            <TouchableOpacity style={style.button}>
                                <Text style={style.textbutt}> Gửi </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
     );
    }
export default Custormerhelp;
