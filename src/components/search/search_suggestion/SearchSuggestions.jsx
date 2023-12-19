import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SuggestionItem from './SuggestionItem'

const SearchSuggestions = ({ sugesstionList, onItemSelected }) => {
  return (
    <ScrollView style={styles.container}>
      {/* <FlatList
        data={sugesstionList}
        renderItem={({item}) => (
          <SuggestionItem
            itemName={item.title}
            onItemSelected={() => {
               console.log(item.title);
               console.log(sugesstionList);
            }}
          />
        )}
        keyExtractor={item => item.id}
      /> */}
      {
        sugesstionList.map((data) => (
          <SuggestionItem
            itemName={data.title}
            onItemSelected={() => {onItemSelected(data.title)}}
            key={data.id}
          />
        ))
      }
    </ScrollView>
  )
}

export default SearchSuggestions

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column'
  }
})