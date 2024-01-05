import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import fetchRecipe from '../../hook/fetchRecipe'
import Spacer from '../common/spacer/Spacer';

const MealPlanningItem = ({foodId, onItemPressed}) => {
    console.log(foodId);
    const {data: foodData, isLoading: foodLoading, refetch: foodRefetch} = fetchRecipe(foodId)
    return (
      <TouchableOpacity
        onPress={() => onItemPressed(foodId)}
        style={styles.container}
      >
        <Image
        style={styles.itemImg}
          source={{uri: foodData.image}}
        />
        <Spacer height={8}/>
        <Text style={styles.title}>{foodData.title}</Text>
      </TouchableOpacity>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
        width: 240
    },
    itemImg: {
        width: 240,
        height: 160,
        borderRadius: 16
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        color: 'black',
        width: 220
    },
  })
  
  export default MealPlanningItem