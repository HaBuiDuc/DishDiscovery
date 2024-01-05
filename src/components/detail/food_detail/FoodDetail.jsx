import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import GeneralInfo from '../general_info/GeneralInfo'
import Description from '../description/Description'
import Ingredients from '../ingredient/Ingredients'
import Feather from 'react-native-vector-icons/Feather'
import Spacer from '../../common/spacer/Spacer'

const FoodDetail = ({ foodData, onInstructionNavigate }) => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <GeneralInfo
        foodData={foodData}
      />
      <Description
        foodDes={foodData.summary}
      />
      <Spacer height={16} />
      <Ingredients
        ingredientList={foodData.extendedIngredients}
      />
      <TouchableOpacity
        style={styles.instructBtn}
        onPress={onInstructionNavigate}
      >
        <Feather name="book" size={24} color="white" />
        <Spacer width={8} />
        <Text style={styles.instructTxt}>Instruction</Text>
      </TouchableOpacity>
      <Spacer height={32} />
    </ScrollView>
  )
}

export default FoodDetail

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: -16,
    // zIndex: 2,
    position: 'relative',
    backgroundColor: 'white',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    padding: 24
  },
  instructBtn: {
    backgroundColor: 'green',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    paddingHorizontal: 24,
    paddingVertical: 8,
    flexDirection: 'row',
    marginVertical: 16
    // zIndex: 2,
    // position: 'absolute',
    // bottom: 0
  },
  instructTxt: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white'
  }
})