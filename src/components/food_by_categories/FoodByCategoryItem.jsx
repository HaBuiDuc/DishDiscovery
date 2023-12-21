import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FoodByCategoryItem = ({ foodData, onDishSelected }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {onDishSelected(foodData)}}
    >
      <Image
        style={styles.foodImg}
        source={{ uri: foodData.image }}
      />
      <Text
        numberOfLines={1} // Set the maximum number of lines
        ellipsizeMode='tail' // Add an ellipsis at the end of the truncated text
        style={styles.foodTitle}>{foodData.title}
      </Text>
    </TouchableOpacity>
  )
}

export default FoodByCategoryItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  foodImg: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
  foodTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginStart: 16,
    flex: 1
  }
})