import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import axios from 'axios';//api
import * as Yup from 'yup';//validate login
import { 
    Formik, 
    Form
} from "formik";//formik
import {
    API_URL,
    API_TOKEN
} from '@env'// Environment variable
import  {
    Octicons,
    Ionicons, 
    Fontiso, 
    FontAwesome
} from '@expo/vector-icons';//icon
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
}from '../../components/styles'//custom style
import { 
    View,
    Text,
    ActivityIndicator

} from "react-native";//react style
import Colors from "../../theme/Colors";
import { accessToken} from '../../components/Storages/Storage';
const ValidateLogin = Yup.object().shape({
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required Password'),
    email: Yup.string()
      .email('Invalid Email')
      .required('Required Email'),
});

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true)
    const [message, setMessage] = useState()
 
    const handleLogin = (credential, setSubmitting) =>{
        const url =  API_URL + '/api/auth/login'

        axios.post(url,credential).then((response)=> {    
                const result = response.data
                const{success,message,token, data} =result
                setMessage(message)
                if (success == true ){
                    accessToken(token)
                    navigation.navigate('Home', {...data} )
                    // console.log(data)
                   
                }else{
                    console.log("fail login")
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
                <PageLogo source= {require('../../assets/Img/icon.jpg')}/>
                <PageTitle> Food App</PageTitle>
                <SubTitle>account login</SubTitle>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values, {setSubmitting}) =>{
                        if(values.email == '' || values.password == '' ){
                            console.log('error')
                            setSubmitting(false)
                        }else{
                            handleLogin(values, setSubmitting)
                        }
                        
                    }}
                    validationSchema =  {ValidateLogin}
                   
                >
                    {({handleChange, handleBlur, handleSubmit, values, errors, touched, isSubmitting})=> (
                    <StyledFormArea>
                        <MyTextInput
                            label="Email Address"
                            icon="mail"
                            placeholder="name@gmail.com"
                            placeholderTextColor={Colors.darkLight}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                            invalid={errors.email}
                            
                        /> 
                        {errors.email && touched.email &&
                            <MsgBox>{errors.email}</MsgBox>
                        }
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
                        {errors.password && touched.password &&
                            <MsgBox>{errors.password}</MsgBox>
                        }
                        
                        { !isSubmitting && 
                            <StyledButton onPress={handleSubmit}>
                                <ButtonText >
                                    Login
                                </ButtonText>
                            </StyledButton> 
                        }
                        { isSubmitting && 
                            <StyledButton disabled={true}>
                                <ActivityIndicator size="large" color={Colors.primary}/>
                            </StyledButton> 
                        }
                        <Line/>
                        <MsgBox>{message}</MsgBox>
                        <StyledButton google={true}  onPress={handleSubmit}>
                            
                            <FontAwesome name="google" color={Colors.primary} size={25}/>
                            <ButtonText google={true} >Sign in with Google</ButtonText>
                        </StyledButton>
                        <ExtraView>
                            <ExtraText>
                                Don't have an account already?
                            </ExtraText>
                            <TextLink  onPress={() => navigation.navigate('Signup')}>
                                <TextLinkContent>
                                    sign up
                                </TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}

                </Formik> 
            </InnerContainer>
        </StyledContainer>
    );
} ;

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return(
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={Colors.brand}/>

            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={()=> setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={Colors.darkLight}/>
                </RightIcon>
            )}
        </View>
    );
};
export default Login;