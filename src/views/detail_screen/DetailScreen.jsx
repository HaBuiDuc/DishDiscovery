import { View, StyleSheet } from 'react-native'
import React from 'react'
import TopBar from '../../components/detail/topbar/TopBar'
import FoodPhoto from '../../components/detail/food_photo/FoodPhoto'
import FoodDetail from '../../components/detail/food_detail/FoodDetail'
import Modal from 'react-native-modal';


const DetailScreen = ({ route, navigation }) => {
  const popBack = () => {
    navigation.pop()
  }
  const foodData = route.params
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TopBar
          popBack={popBack}
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