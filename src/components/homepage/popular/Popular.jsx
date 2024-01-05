import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import PopularItem from './PopularItem'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Spacer from '../../common/spacer/Spacer'

const Popular = ({ foodData, onDetailToggle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>Popular</Text>
        <TouchableOpacity 
          onPress={() => {}}
        >
          <Text
            style={styles.clickableTxt}
          >See all</Text>
        </TouchableOpacity>
      </View>
      <Spacer height={16} />
      <FlatList
        data={foodData}
        renderItem={({ item }) => (
          <PopularItem
            data={item}
            onItemPressed={() => {onDetailToggle(item)}}
          />
        )}
        keyExtractor={item => (item.id)}
        horizontal={true}
        ItemSeparatorComponent={<Spacer width={16} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      
  },
  headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  }, 
  clickableTxt: {
      color: 'green',
      fontWeight: '500'
  },
  headerTxt: {
      fontWeight: 'bold',
      fontSize: 20
  }
})

export default Popular