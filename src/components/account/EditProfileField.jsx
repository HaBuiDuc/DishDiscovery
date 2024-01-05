import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Spacer from '../common/spacer/Spacer'

const EditProfileField = ({placeholder, value, onValueChange, label}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <Spacer height={4}/>
        <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            value={value}
            onChangeText={onValueChange}
        />
    </View>
  )
}

export default EditProfileField

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginVertical: 4
    },
    textInput: {
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 6
    },
    label: {
        fontSize: 16,
        fontWeight: '500'
    },

})