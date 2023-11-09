import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SearchView = ({ onSearchToggle }) => {
    return (
        <TouchableOpacity
            onPress={onSearchToggle}
        >
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image
                        style={styles.searchIcon}
                        source={require('/Users/habuiduc/Development/MobileDev/ReactNative/DishDiscovery/assets/images/Search_light.png')}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder='Search any recipes'
                        placeholderTextColor={'black'}
                        editable={false}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: 'white',
        alignItems: "center",
        borderRadius: 24,
        marginVertical: 10
    },
    searchIcon: {
        width: 32,
        aspectRatio: 1,
        marginStart: 12
    },
    row: {
        flexDirection: "row",
        alignItems: "center"
    },
    textInput: {
        width: '100%',
        padding: 16,
    }
})

export default SearchView   