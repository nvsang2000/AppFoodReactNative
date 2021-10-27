import React from 'react';

import {
    View,
    Text
} from "react-native"
//icon
import  {Octicons, Ionicons, Fontiso, FontAwesome} from '@expo/vector-icons';
import axios from 'axios';
import { 
    
    StyledContainer,
    InnerContainer,
    TouchableOpacity
 } from '../../components/styles';
const TabHome = ({navigation}) => {
    

    return (
        <StyledContainer>
            <Text >
                home
            </Text>
            
        </StyledContainer>
    )
}

export default TabHome