import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import RecommendItem from './RecommendItem'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Spacer from '../../common/spacer/Spacer'

const Recommendation = ({ foodData, onDetailToggle }) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>Recommendation</Text>
        <TouchableOpacity
          onPress={() => { }}
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
          <RecommendItem
            data={item}
            onItemPressed={() => { onDetailToggle(item) }}
          />
        )}
        keyExtractor={item => (item.id)}
        horizontal={true}
        ItemSeparatorComponent={<Spacer width={12} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
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

export default Recommendation