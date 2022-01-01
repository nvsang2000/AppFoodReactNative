import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import Colors from '../../theme/Colors';

export default CustomButton = ({ onPress, title }) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{title}</Text>
        </TouchableOpacity>
    )
    
}
  

const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: Colors.button_pay,
    borderRadius: 2,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});