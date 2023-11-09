import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IngredientItem from './IngredientItem'

const Ingredients = ({ ingredientList }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingredients</Text>
      {
        ingredientList.map((data) => (
          <IngredientItem
            ingredientData={data}
            key={data.id}
          />
        ))
      }
    </View>
  )
}

export default Ingredients

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18
},
})