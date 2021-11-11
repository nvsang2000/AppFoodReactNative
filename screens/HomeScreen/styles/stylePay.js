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
    inputT:{
        top:10,
        flexDirection: 'row',
        backgroundColor:'white',
        height:45,
        justifyContent:'space-between'     
    },
    textname:{
        alignSelf:'center',
        left:15,
        fontSize:15,
    },
    icon:{
        color:'#DDC5C5',
        alignSelf:'center',
        right:15,
    },
    hr:{
        borderBottomColor:'#EAE0E0',
        borderBottomWidth: 1,
        top:10
    },
    textnameTT:{
        alignSelf:'center',
        left:10,
        fontSize:15,
        fontWeight: 'bold',
    },
})
