import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import fetchRecipe from '../../hook/fetchRecipe'

const FavoriteItem = ({ foodId, onDishSelected }) => {
    console.log(foodId);
    const { data: foodData, isLoading: foodLoading, refetch: foodRefetch } = fetchRecipe(foodId)
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => { onDishSelected(foodId) }}
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

export default FavoriteItem

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