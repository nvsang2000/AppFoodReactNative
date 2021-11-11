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
    body:{
        flexDirection:'column',
        height: 800,
        
    },
    profile:{
        backgroundColor: Colors.primary,
        flex:1,
        marginTop:40,
    },
    styleTO:{
        flexDirection: 'row',
        left:10,
    },
    textnameTT:{
        alignSelf:'center',
        left:10,
        fontSize:15,
        fontWeight: 'bold',
    },
    input:{
        backgroundColor:'white',
        borderWidth:1,
        margin:10,
        height:300,
    },
    textG:{
       left:10,
       top:3,
    },
    button:{
        backgroundColor:Colors.brand,
        height:40,
        top:10,
        width:100,
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
