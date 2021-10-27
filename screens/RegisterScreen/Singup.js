import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";//formik
import axios from 'axios';//api
import  {
    Octicons,
    Ionicons, 
    Fontiso, 
    FontAwesome
} from '@expo/vector-icons';//icon
import {
    API_URL,
    API_TOKEN
} from '@env'// Environment variable
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  StyledButton,
  RightIcon,
  ButtonText,
  MsgBox,
  Line,
  ExtraText,
  TextLink,
  TextLinkContent,
  ExtraView
}from '../../components/styles'
import Colors from "../../theme/Colors";
import { 
    View,
    TouchableOpacity,
    ActivityIndicator

} from "react-native";

import DateTimePicker from '@react-native-community/datetimepicker';//date

import * as Yup from 'yup';//validate register
const ValidateRegister = Yup.object().shape({
    username: Yup.string()
      .min(4, 'Too Short!')
      .max(50, 'Too Long!')
      .required(' Required username')
    ,
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required Password'),
      
    confirmPassword:  Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required Password'),

    email: Yup.string()
      .email('Invalid email')
      .required('Required Email'),
 });

const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true)
    const [show, setShow] = useState(false)
    const [date, setDate] = useState(new Date(2000, 0, 1))
    const [message, setMessage] = useState()

    const [dob, setDob] = useState()
    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date ;
        setShow(false)
        setDate(currentDate)
        setDob(currentDate)
    }
    const handleRegister = (credential, setSubmitting) =>{
        const url =  API_URL + '/api/auth/register'
        axios.post(url,credential).then((response)=> {
            console.log(credential)   
            const result = response.data
            const{success,message,token,data} =result
            setMessage(message)
           
            if (success == true ){
                navigation.navigate('Home', {...data})
                
            }else{
                console.log("fail register")
            }
            setSubmitting(false)
        })
        .catch(error => {
            setSubmitting(false)
            console.log(error.JSON)
    })

    }
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                
                <PageTitle> Food App</PageTitle>
                <SubTitle> create account </SubTitle>
                {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={date}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}
                <Formik
                    validationSchema={ValidateRegister}
                    initialValues={{username: '', email: '' ,  password: '', confirmPassword: '' }}
                    onSubmit={(values, {setSubmitting}) =>{
                        if (
                                values.username == '' ||
                                values.password == '' ||
                                values.confirmPassword == '' 
                            ){
                            setSubmitting(false)
                            console.log("fail pass")
                            
                        }else{
                            handleRegister(values, setSubmitting)
                            
                        }   
                    }}
                >
                    {({handleChange, handleBlur, handleSubmit, values, errors, isSubmitting})=> (
                    <StyledFormArea>
                        <MyTextInput
                            label="Name"
                            icon="person"
                            placeholder="nv sang"
                            placeholderTextColor={Colors.darkLight}
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}  
                        /> 
                        {errors.username && 
                            <MsgBox>{errors.username}</MsgBox>
                        }
                        <MyTextInput
                            label="Email Address"
                            icon="mail"
                            placeholder="name@gmail.com"
                            placeholderTextColor={Colors.darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            
                        />
                        {errors.email && 
                            <MsgBox>{errors.email}</MsgBox>
                        }
                        {/* <MyTextInput
                            label="Date Of Birth"
                            icon="calendar"
                            placeholder="YYY - MM - DD"
                            placeholderTextColor={darkLight}
                            onChangeText={handleChange('dateOfBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value={values.dateOfBirth}
                            value={dob ? dob.toDateString() : ''}
                            isDate={true}
                            editable={false}
                            showDatePicker={showDatePicker}
                        /> */}
                        <MyTextInput
                            label="Password"
                            icon="lock"
                            placeholder="* * * * *"
                            placeholderTextColor={Colors.darkLight}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            
                        /> 
                        {errors.password && 
                            <MsgBox>{errors.password}</MsgBox>
                        }
                        <MyTextInput
                            label="Confirm Password"
                            icon="lock"
                            placeholder="* * * * *"
                            placeholderTextColor={Colors.darkLight}
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                            
                        />
                        {errors.confirmPassword && 
                            <MsgBox>{errors.confirmPassword}</MsgBox>
                        }
                        
                        { !isSubmitting && 
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText >
                                    Register
                                </ButtonText>
                            </StyledButton> 
                        }
                        { isSubmitting && 
                            <StyledButton disabled={true}>
                                <ActivityIndicator size="large" color={Colors.primary}/>
                            </StyledButton> 
                        }
                        <MsgBox>{message}</MsgBox>
                        <Line/>
                        <ExtraView>
                            <ExtraText>
                                already have an account ?
                            </ExtraText>
                            <TextLink onPress={() => navigation.goBack()}>
                                <TextLinkContent>
                                    Login
                                </TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}

                </Formik>

                
            </InnerContainer>
        </StyledContainer>
    );
} ;

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, 
    isDate, showDatePicker, ...props }) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={Colors.brand}/>

            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            {!isDate && <StyledTextInput {...props} />}
            {isDate && 
                <TouchableOpacity onPress={showDatePicker}>
                    <StyledTextInput {...props}/>
                </TouchableOpacity>
            }
            {isPassword && (
                <RightIcon onPress={()=> setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={Colors.darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};
export default Signup;