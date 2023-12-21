import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getFavoriteDishes } from '../../../firebase/FirebaseService'
import FavoriteItem from '../../components/favorites/FavoriteItem'
import Spacer from '../../components/shared/Spacer'
import AppScreen from '../../navigation/AppScreen'

const FavoriteDishesScreen = ({navigation}) => {
  const [favoriteDishes, setFavoriteDishes] = useState([])
  const onGetDishSuccess = (dishes) => {
    console.log(dishes);
    setFavoriteDishes(dishes)
  }
  const onDishSelected = (item) => {
    console.log(item);
    navigation.navigate(AppScreen.DetailScreen, item)
  }
  useEffect(() => {
    getFavoriteDishes(onGetDishSuccess)
  }, [])
  return (
    <View style={styles.container}>
      <FlatList
        data={favoriteDishes}
        renderItem={({ item }) => (
          <FavoriteItem
            onDishSelected={onDishSelected}
            foodId={item.id}
          />
        )}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => (<Spacer height={8} />)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default FavoriteDishesScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 16
  },
})