import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import GeneralInfo from '../general_info/GeneralInfo'
import Description from '../description/Description'
import Spacer from '../../shared/Spacer'
import Ingredients from '../ingredient/Ingredients'

const FoodDetail = ({ foodData }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <GeneralInfo
          foodData={foodData}
        />
        <Description
          foodDes={foodData.summary}
        />
        <Spacer height={16}/>
        <Ingredients
          ingredientList={foodData.extendedIngredients}
        />
    </ScrollView>
  )
}

export default FoodDetail

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: -16,
    zIndex: 2,
    position: 'relative',
    backgroundColor: 'white',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    padding: 24,
  }
})