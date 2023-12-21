import { NativeAppEventEmitter, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import fetchSearchAC from '../../hook/fetchSearchAC'
import SearchContainer from '../../components/search/search_container/SearchContainer'
import SearchSuggestions from '../../components/search/search_suggestion/SearchSuggestions'
import fetchSearch from '../../hook/fetchSearch'
import SearchResult from '../../components/search/search_result/SearchResult'
import fetchRecipe from '../../hook/fetchRecipe'
import { Screen } from 'react-native-screens'

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setQuery] = useState('')
  const [isQuerying, setQuerying] = useState(true)
  const suggestions = fetchSearchAC(searchQuery).data
  const {data: searchResult, isLoading: searchLoading, refetch: searchRefetch} = fetchSearch(searchQuery, isQuerying)

  const onSelectedSuggestion = (title) => {
    console.log(isQuerying);
    setQuery(title)
    setQuerying(false)
  }

  const onDetailNavigate = (item) => {
    // const {data, isLoading} = fetchRecipe(item.id)
    navigation.navigate('Detail', item.id)    // console.log(data);
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
              onResultSelected={onDetailNavigate}
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