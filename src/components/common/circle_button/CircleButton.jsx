import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

const CircleButton = ({ buttonIcon, size=24, onPress }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}
      onPress={onPress}
    >
        <Feather name={buttonIcon} size={24}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
      borderRadius: 100/2,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 4
  },
})

export default CircleButton