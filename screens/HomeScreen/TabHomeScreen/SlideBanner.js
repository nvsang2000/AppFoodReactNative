import React, {Component} from "react";
import { 
  Text, 
  TouchableOpacity,
  StyleSheet,
  Image, 
  View } from "react-native";
import Swiper from "react-native-web-swiper";


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 150
    },
    slideContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "rgba(20,20,200,0.3)"
    },
    slide2: {
        backgroundColor: "rgba(20,200,20,0.3)"
    },
    slide3: {
        backgroundColor: "rgba(200,20,20,0.3)"
    },
});

export default class Screen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper
                  minDistanceForAction={0.1}
                    controlsProps={{
                      dotsTouchable: true,
                      prevPos: 'left',
                      nextPos: 'right',
                      nextTitle: '>',
                      nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500' },
                      PrevComponent: ({ onPress }) => (
                        <TouchableOpacity onPress={onPress}>
                          <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
                            {'<'}
                          </Text>
                        </TouchableOpacity>
                      ),
                    }}
                >
                    <View style={[styles.slideContainer,styles.slide1]}>
                        <Image
                            //resizeMode="center" 
                            source={{uri: 'https://mavoucher.vn/wp-content/uploads/2016/06/Shopee-mien-phi-van-chuyen-cho-don-hang-99k.jpg'}}
                            style={{width: "100%", height: "100%"}}
                         />
                    </View>
                    <View style={[styles.slideContainer,styles.slide2]}>
                        <Text>Slide 2</Text>
                    </View>
                    <View style={[styles.slideContainer,styles.slide3]}>
                        <Text>Slide 3</Text>
                    </View>
                </Swiper>
            </View>
        )
    }
}