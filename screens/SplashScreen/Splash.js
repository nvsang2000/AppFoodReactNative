import React, { Component } from 'react'
import {StyleView,} from '../../components/styles'

import { 
    Dimensions,
    Animated,
    StyleSheet,
} from 'react-native';

var {height, width} = Dimensions.get('window')
export default class Splash extends Component{
    state = {
        logoOpacity: new Animated.Value(0),
        titleMarginTop: new Animated.Value(height / 2)
    }
    async componentDidMount() {
        // animations 
        Animated.sequence([
            //animations by sequence
            Animated.timing(this.state.logoOpacity,{
                toValue: 1,                  
                duration: 1000,  
                useNativeDriver: false,          
            }),
            //Animate Text ?
            Animated.timing(this.state.titleMarginTop, {
                toValue: 10,
                duration: 1000, //1000 miliseconds = 1 second
                useNativeDriver: false, 
            })
        ]).start(() => {
            // Go to login screen
            this.props.navigation.navigate("Login")
        })
    }

    render() {
        return <StyleView>
            <Animated.Image source={require('../../assets/Img/icon.jpg')} 
                style={{...styles.logo, opacity: this.state.logoOpacity}}>         
            </Animated.Image>
            <Animated.Text style={{...styles.title, marginTop:this.state.titleMarginTop}}>
                Food App
            </Animated.Text>
        </StyleView>

    }
}

const styles = StyleSheet.create({
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
