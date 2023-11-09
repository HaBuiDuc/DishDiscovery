import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchItem = ({searchItem}) => {
  return (
    <View style={styles.container}>
        <Image
            style={styles.foodImage}
            source={{uri: searchItem.image}}
        />
        <Text style={styles.foodTitle}>{searchItem.title}</Text>
    </View>
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
        fontWeight: '800'
    }
})