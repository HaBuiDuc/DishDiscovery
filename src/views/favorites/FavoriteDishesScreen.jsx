import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getFavoriteDishes } from '../../../firebase/FirebaseService'
import FavoriteItem from '../../components/favorites/FavoriteItem'

const FavoriteDishesScreen = () => {
  const [favoriteDishes, setFavoriteDishes] = useState([])
  const onGetDishSuccess = (dishes) => {
    console.log(dishes);
    setFavoriteDishes(dishes)
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
            foodId={item.id}
          />
        )}
        keyExtractor={item => item.id}
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