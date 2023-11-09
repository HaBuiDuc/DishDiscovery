import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { capitalizeFirstLetter } from '../../../utils/ExtendFunc';


const SuggestionItem = ({ itemName, onItemSelected }) => {
    return (
        <TouchableOpacity
            onPress={onItemSelected}
        >
            <View style={styles.container}>
                <Feather name='search' size={16} />
                <Text style={styles.txt}>{capitalizeFirstLetter(itemName)}</Text>
            </View>
            <View style={styles.horizontalLine}/>
        </TouchableOpacity>
    )
}

export default SuggestionItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 14
    },
    horizontalLine: {
        width: '100%',
        height: 0.4,
        backgroundColor: 'gray'
    },
    txt: {
        marginHorizontal: 8
    }
})