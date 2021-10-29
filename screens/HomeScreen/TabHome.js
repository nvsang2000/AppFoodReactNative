import * as React from 'react';

import {
    View,
    Text,
    SafeAreaView,
    TextInput
} from "react-native"
import Fonts from '../../theme/Fonts';
//icon
import  {Octicons, Ionicons, Fontiso, FontAwesome} from '@expo/vector-icons';
import { style } from './styles/styleTabHome';
import axios from 'axios';
import Colors from '../../theme/Colors';

const TabHome = ({navigation}) => {


return (
<SafeAreaView>
    <View style={style.container}>
        <View>
            <Text>Địa chỉ : Tổ 40, phường hòa hải, quận ngũ hành sơn</Text> 
        </View>
        <View style={style.inputSearch} >
            <FontAwesome name="search" size={18} color={Colors.darkLight} />
            <TextInput style={{ flex: 1, fontSize:18 }} placeholder="Search for food"/>       
        </View>
    </View>
</SafeAreaView>
           
)}

export default TabHome