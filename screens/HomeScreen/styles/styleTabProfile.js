import styled from 'styled-components/native'
import Colors from '../../../theme/Colors';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
const StatusBarHeight = Constants.statusBarHeight;

export const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
    },
    profile: {
        flex: 1,
        marginTop:40,
        padding: 20,
        paddingHorizontal: 29,
        flexDirection: 'row',
        textAlign: 'center',
        backgroundColor: Colors.primary,
        borderBottomColor: Colors.darkLight
        

    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 60,
        borderColor: Colors.darkLight,
        borderWidth: 2,
        backgroundColor: '#dcdcdc',
        alignSelf: 'center',

    },
    nameSection: {
        textAlign: 'center',
        margin: 30,
    },
    username: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.black
    },
    email: {
        color: Colors.black
    },
    actions: {
      padding: 10,
      flexDirection: 'column',
    },
    action: {
      marginTop: 8,
      flex:1,
      paddingHorizontal: 5,
      backgroundColor: Colors.primary,
      flexDirection: 'row',

    },
    rowAction: {
      flex:1,
      flexDirection: 'row', 
      alignSelf: 'center'
    },
    actionTitle: {
      fontSize: 18,
      marginLeft: 19,

    },
    iconContainer: {
      width: 40,
      height: 40,
      alignContent: 'center'
  },
    iconRight: {
      justifyContent: 'center',
      alignSelf: 'center',
      margin:5
    },

})
