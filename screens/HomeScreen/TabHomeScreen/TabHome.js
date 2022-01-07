import * as React from 'react';

import {
    View,
    Text,
    TextInput,
    FlatList,
    SafeAreaView
} from "react-native"
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import Fonts from '../../../theme/Fonts';
//icon
import  {Octicons, Ionicons, Fontiso, FontAwesome} from '@expo/vector-icons';
import { style } from '../styles/styleTabHome';
import axios from 'axios';
import Colors from '../../../theme/Colors';
import ListCategory from './ListCategory'
import SearchBar from './SearchBar'
import SlideBanner from './SlideBanner'
import ListProduct from './ListProduct'
import { useNavigation } from '@react-navigation/native';

export default function TabHome()  {
    

    return (
        <SafeAreaView style={{ flex: 1, marginTop:40 }}>
            <View  forceInset={{ top: 'always' }} style={style.containerFull}>
                <View style={style.container}>
                    <Text style={style.titleAddress}> Tổ 40, phường hòa hải, quận ngũ hành sơn</Text> 
                </View>
                
                <SearchBar/>
            </View>
            <SlideBanner/>
            <ListCategory/>
            <ListProduct/> 

            
        </SafeAreaView>
            
    )
}
