import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const FoodPhoto = ({foodUri}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={{uri: foodUri}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  photo: {
      width: '100%',
      aspectRatio: 1.2
  }
})

export default FoodPhoto