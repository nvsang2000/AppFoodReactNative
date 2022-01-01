
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Colors from '../../../theme/Colors';

export const style = StyleSheet.create({
    containerFull:{
        backgroundColor:Colors.bghome
    },
    titleAddress:{
        color:Colors.primary
    },
    container: {
        margin:20,
        flex:1,
    },
    inputSearch: {
        marginTop: 20,
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: Colors.secondary,
        alignItems: 'center',
        paddingHorizontal: 20,
    }
})