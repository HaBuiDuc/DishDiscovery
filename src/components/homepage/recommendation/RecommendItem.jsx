import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Spacer from '../../shared/Spacer'

const RecommendItem = ({data, onItemPressed}) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onItemPressed}
    >
        <Image
            style={styles.itemImg}
            source={{uri: data.image}}
        />
        <Spacer height={8}/>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.vegInfoTxt}>
            {(data.vegetarian)?'Vegetarian':'Non-Vegetarian'}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
      flexDirection: "column",
      width: 140
  },
  itemImg: {
      width: 140,
      height: 170,
      borderRadius: 14
  },
  title: {
      fontWeight: "bold",
      fontSize: 16,
      color: 'black'
  },
  vegInfoTxt: {
      color: 'gray',
      fontWeight: '500'
  }
})

export default RecommendItem