import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';

const SearchBar = ({ onQueryChange, searchQuery }) => {
    const onClearQuery = () => {
        onQueryChange('')
    }

    return (
        <View style={styles.container}>
            <Feather style={styles.leadingIcon} name='search' color={'gray'} size={20} />
            <TextInput
                style={styles.txtInput}
                onChangeText={onQueryChange}
                value={searchQuery}
                placeholder='Would you like to eat something?'
                placeholderTextColor={'gray'}
            />
            {
                (searchQuery.trim() !== '') && (
                    <TouchableOpacity
                        style={styles.trailingIcon}
                        onPress={onClearQuery}
                    >
                        <Feather name='x-circle' size={18} />
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        alignSelf: 'stretch',
        marginEnd: 16,
        marginStart: 8
    },
    txtInput: {
        paddingVertical: 12,
        // backgroundColor: 'blue',
        flex: 1,
        alignSelf: 'stretch',

    },
    leadingIcon: {
        marginHorizontal: 6
    },
    trailingIcon: {
        marginEnd: 16,
        marginStart: 8
    }
})