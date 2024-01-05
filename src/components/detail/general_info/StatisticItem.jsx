import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

const StatisticItem = ({
  iconName,
  data
}) => {
  return (
    <View style={styles.container}>
      <Feather name={iconName} size={20} color={'dimgray'} />
      <Text style={styles.valueTxt}>{data}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  valueTxt: {
    color: 'dimgray',
    marginStart: 2
  }
})

export default StatisticItem