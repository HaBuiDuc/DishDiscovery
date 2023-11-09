import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Spacer from '../../shared/Spacer'

const PopularItem = ({data, onItemPressed}) => {
  return (
    <TouchableOpacity 
      onPress={onItemPressed}
      style={styles.container}
    >
      <Image
      style={styles.itemImg}
        source={{uri: data.image}}
      />
      <Spacer height={8}/>
      <Text style={styles.title}>{data.title}</Text>
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

export default PopularItem