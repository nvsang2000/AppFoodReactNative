import styled from 'styled-components/native'
import Colors from '../../../theme/Colors';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
const StatusBarHeight = Constants.statusBarHeight;

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.primary,
    },
    profile:{
        flex:1,
        marginTop:40,
    },
    styleTO:{
        flexDirection: 'row',
        left:10,
    },
    hr:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        top:5,
    },
    image:{
        width: 150,
        height: 150,
        borderRadius: 80,
        borderColor: Colors.darkLight,
        borderWidth: 2,
        backgroundColor: '#dcdcdc',
        alignSelf: 'center',
        marginTop:30,
    },
    textbutton:{
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.brand,
        padding:11,
        textAlign:'center',
        bottom:5,
    },
    username:{
        left:10,

    },
    actions: {
        padding: 5,
     },
    input:{
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
    },
    button:{
        backgroundColor:Colors.brand,
        height:40,
        marginTop:50,
        width:300,
        alignSelf: 'center',
        borderRadius:5,

    },
    textbutt:{
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors.primary,
        padding:9,
        textAlign:'center',

    },
})
