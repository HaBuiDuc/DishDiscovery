import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const SearchItem = ({ searchItem, onResultSelected }) => {
    return (
        <TouchableOpacity 
            onPress={onResultSelected}
        >
            <View style={styles.container}>
                <Image
                    style={styles.foodImage}
                    source={{ uri: searchItem.image }}
                />
                <Text numberOfLines={2} style={styles.foodTitle}>{searchItem.title}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default SearchItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 8,
    },
    foodImage: {
        width: 60,
        aspectRatio: 1,
        borderRadius: 8,
        marginEnd: 16
    },
    foodTitle: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600'
    }
})