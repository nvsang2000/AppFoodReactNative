
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
const StatusBarHeight = Constants.statusBarHeight;
export const styles = StyleSheet.create({
    logo: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
    },
    title: {      
       fontWeight: 'bold',  
        marginTop: 10,    
        textAlign: 'center',
        width: 400,
        color:'#6D28D9',
        fontSize: 30
    },

})
