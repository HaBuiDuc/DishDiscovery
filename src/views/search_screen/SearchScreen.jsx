import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import fetchSearchAC from '../../hook/fetchSearchAC'
import SearchContainer from '../../components/search/search_container/SearchContainer'
import SearchSuggestions from '../../components/search/search_suggestion/SearchSuggestions'
import fetchSearch from '../../hook/fetchSearch'
import SearchResult from '../../components/search/search_result/SearchResult'

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setQuery] = useState('')
  const [isQuerying, setQuerying] = useState(true)
  const suggestions = fetchSearchAC(searchQuery).data
  const searchResult = fetchSearch(searchQuery, isQuerying).data

  const onSelectedSuggestion = (title) => {
    setQuerying(false)
    setQuery(title)
  }

  useEffect(() => {
    setQuerying(true)
  }, [searchQuery])

  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <SearchContainer
          onPopBack={() => { navigation.pop() }}
          onQueryChange={setQuery}
          searchQuery={searchQuery}
        />
      )
    })
  }, [navigation, searchQuery])

  return (
    <View style={styles.container}>
      {/* <SearchSuggestions
        sugesstionList={suggestions}
        onItemSelected={title => { }}
      /> */}

      {
        (isQuerying)
          ? (
            <SearchSuggestions
              sugesstionList={suggestions}
              onItemSelected={title => { onSelectedSuggestion(title)}}
            />
          )
          : (
            <SearchResult
              searchResult={searchResult}
            />
          )
      }
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(247,247,247)',
    flex: 1,
    paddingHorizontal: 16,
  }
})