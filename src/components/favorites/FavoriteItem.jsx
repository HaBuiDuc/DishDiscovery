import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import fetchRecipe from '../../hook/fetchRecipe'

const FavoriteItem = ({ foodId }) => {
    console.log(foodId);
    const { data: foodData, isLoading: foodLoading, refetch: foodRefetch } = fetchRecipe(foodId)
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image
                    style={styles.foodImage}
                    source={{ uri: foodData.image }}
                />
                <View style={styles.txtContainer}>
                    <Text
                        numberOfLines={1}
                        ellipsizeMode='tail'
                    >{foodData.title}</Text>
                    <Text>{foodData.readyInMinutes}</Text>
                </View>
            </View>
            <TouchableOpacity
                style={styles.tagBtn}
                onPress={() => { }}
            >
                <Feather name='tag' size={20}/>
            </TouchableOpacity>
        </View>
    )
}

export default FavoriteItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    foodImage: {
        width: 100,
        height: 100,
    },
    txtContainer: {
        flexDirection: 'column',
        marginLeft: 8,
    },
    row: {
        flexDirection: 'row',
        flex: 1,
    },
    tagBtn: {
        width: 40,
        height: 40,
    }
})