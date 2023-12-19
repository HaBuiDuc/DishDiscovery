import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchItem from './SearchItem'

const SearchResult = ({ searchResult }) => {
    // console.log(searchResult);
    return (
        <ScrollView
         style={styles.container}
         showsVerticalScrollIndicator={false}
        >
            {
                Object.values(searchResult).map(data => (
                    <SearchItem
                        searchItem={data}
                        key={data.id}
                    />
                ))
            }
        </ScrollView>
    )
}

export default SearchResult

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    }
})