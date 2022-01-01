import React from 'react';

import {
    View,
    Text
} from "react-native"
import {
     API_URL,
     API_TOKEN
 } from '@env'// Environment variable
import axios from "axios";
import { 
    StyledContainer,
    InnerContainer,
 } from '../../components/styles';
 import CustomButton from '../../components/Custom/Button'
export default function TabNotification(){
    return (
        <StyledContainer>
            <Text>
            TabNotification
            </Text>
            
        </StyledContainer>
    )
}