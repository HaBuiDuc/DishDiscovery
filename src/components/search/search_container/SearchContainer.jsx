import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import SearchBar from '../search_bar/SearchBar';

const SearchContainer = ({ onPopBack, onQueryChange, searchQuery }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.backIcon}
                onPress={onPopBack}
            >
                <Feather name='arrow-left' size={24} />
            </TouchableOpacity>
            <SearchBar
                searchQuery={searchQuery}
                onQueryChange={onQueryChange}
            />
        </View>
    )
}

export default SearchContainer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingBottom: 10,
        backgroundColor: 'rgb(247,247,247)',
        shadowOpacity: 0.68,
        shadowRadius: 3.84,
        elevation: 4,
    },
    backIcon: {
        marginStart: 8,
        backgroundColor: 'rgb(247,247,247)'
    }
})