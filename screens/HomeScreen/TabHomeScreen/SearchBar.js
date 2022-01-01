
import React, { useState, useEffect, Component } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    TouchableOpacity,
    TextInput, Image
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function(props) {
  const navigation = useNavigation();

  return <Searchbar {...props} navigation={navigation} />;
}
class Searchbar extends Component {
    constructor(prop){
        super(prop)
    }
    render(){
        const { navigation } = this.props
        return (
            <View style={styles.container} >
                <View style={styles.searchContainer}>
                    <View style={styles.vwSearch}>
                        <Image
                            style={styles.icSearch}
                            source={require('../../../assets/Img/ic_search.png')} />
                    </View>
                    <TouchableOpacity style={styles.textInput} onPress={() => navigation.navigate('SearchScreen')}r>
                        <Text >Enter Search ...</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
        )
    }
}
const styles = StyleSheet.create({

    textInput: {
        // backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        
    },

    vwSearch: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 40,
        // backgroundColor: 'red'
    },
    icSearch: {
        height: 18, width: 18
    },
    searchContainer:
    {
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        flexDirection: 'row'

    },
    container: {
        alignItems: 'center',
        padding:5,
        flexDirection: 'row',
    },
});
