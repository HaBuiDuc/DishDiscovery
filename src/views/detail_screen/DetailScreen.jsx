import { View, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import TopBar from '../../components/detail/topbar/TopBar'
import FoodPhoto from '../../components/detail/food_photo/FoodPhoto'
import FoodDetail from '../../components/detail/food_detail/FoodDetail'
import Modal from 'react-native-modal';
import fetchRecipe from '../../hook/fetchRecipe'
import { addFavoriteDish, checkDishExistsInFirestore, removeFavoriteDish } from '../../../firebase/FirebaseService'


const DetailScreen = ({ route, navigation }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const popBack = () => {
    navigation.pop()
  }
  const foodDataId = route.params
  const addToFavorite = () => {
    const data = {
      id: foodDataId
    }
    addFavoriteDish(data)
  }
  const removeFromFavorite = () => {
    removeFavoriteDish(foodDataId)
  }

  const onBookmarkPress = () => {
    if (isFavorite) {
      removeFromFavorite()
    } else {
      addToFavorite()
    }
    // setIsFavorite(!isFavorite)
  }

  useEffect(() => {
    checkDishExistsInFirestore(foodDataId, setIsFavorite)
  },[])

  const {data: foodData, isLoading: foodLoading, refetch: foodRefetch} = fetchRecipe(foodDataId)
  if (!foodData.extendedIngredients) {
    return
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBar
          isFavorite={isFavorite}
          popBack={popBack}
          addToFavorite={onBookmarkPress}
        />
      </View>
      <FoodPhoto
        foodUri={foodData.image}
      />
      {/* <Modal style={styles.bottomSheetContainer} isVisible={true} onBackdropPress={() => {}}>
        <View >
        </View>
      </Modal> */}
      <FoodDetail
        foodData={foodData}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(247,247,247)',
    flexDirection: 'column'
  },
  topBar: {
    margin: 16,
    position: 'absolute',
    zIndex: 1,
    flexDirection: 'row',
  },
  bottomSheetContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  }
})

export default DetailScreen