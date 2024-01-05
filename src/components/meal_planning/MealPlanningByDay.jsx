import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MealPlanningItem from './MealPlanningItem'
import Spacer from '../common/spacer/Spacer'

const MealPlanningByDay = ({ day, mealData, onItemPressed }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.dayTxt}>{day}</Text>
            <Spacer height={8} />
            <FlatList
                horizontal
                data={mealData}
                renderItem={({ item }) => (
                    <MealPlanningItem
                        foodId={item.id}
                        onItemPressed={onItemPressed}
                    />)}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <Spacer width={8} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default MealPlanningByDay

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 16
    },
    dayTxt: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black'
    }
})