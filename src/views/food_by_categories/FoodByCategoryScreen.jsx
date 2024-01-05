import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import fetchByCategory from '../../hook/fetchByCategory'
import FoodByCategoryItem from '../../components/food_by_categories/FoodByCategoryItem'
import AppScreen from '../../navigation/AppScreen'
import CustomHeader from '../../components/common/custom_header/CustomHeader'
import Spacer from '../../components/common/spacer/Spacer'

const FoodByCategoryScreen = ({route, navigation}) => {
    const {category} = route.params
    const {data: foodData} = fetchByCategory(category)
    const onDishSelected = (item) => {
        navigation.navigate(AppScreen.DetailScreen, item.id)
    }
    React.useLayoutEffect(() => {
        navigation.setOptions({
            header: () => (
                <CustomHeader
                    title={category}
                    leftIconName='arrow-left'
                    onLeftPress={() => navigation.pop()}
                />
            )
        })
    })
    return (
        <View style={styles.container}>
            <FlatList
                data={foodData}
                renderItem={({item}) => (
                    <FoodByCategoryItem
                        foodData={item}
                        onDishSelected={onDishSelected}
                    />
                )}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (<Spacer height={8}/>)}
            />
        </View>
    )
}

export default FoodByCategoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 16
    }
})