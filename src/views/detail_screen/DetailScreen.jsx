import { View, StyleSheet } from 'react-native'
import React from 'react'
import TopBar from '../../components/detail/topbar/TopBar'
import FoodPhoto from '../../components/detail/food_photo/FoodPhoto'
import FoodDetail from '../../components/detail/food_detail/FoodDetail'
import Modal from 'react-native-modal';
import fetchRecipe from '../../hook/fetchRecipe'
import { addFavoriteDish } from '../../../firebase/FirebaseService'


const DetailScreen = ({ route, navigation }) => {
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

  const {data: foodData, isLoading: foodLoading, refetch: foodRefetch} = fetchRecipe(foodDataId)
  if (!foodData.extendedIngredients) {
    return
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBar
          popBack={popBack}
          addToFavorite={addToFavorite}
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