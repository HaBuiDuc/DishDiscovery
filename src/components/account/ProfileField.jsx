import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProfileField = ({title, value}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.titleTxt}>{title}</Text>
        <Text style={styles.valueTxt}>{value}</Text>
    </View>
  )
}

export default ProfileField

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    titleTxt: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'gray'
    },
    valueTxt: {
        fontSize: 16,
        fontWeight: 'normal',
    },
})