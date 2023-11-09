import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import StatisticItem from './StatisticItem'

const GeneralInfo = ({ foodData }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.nameContainer}>
                    <Text style={styles.foodName}>{foodData.title}</Text>
                    <Text>{(foodData.vegetarian) ? 'Vegetarian' : 'Non-Vegetarian'}</Text>
                </View>
                <View style={styles.rateContainer}>

                </View>
            </View>
            <View style={styles.statisticContainer}>
                <StatisticItem
                    iconName={'clock'}
                    data={`${foodData.readyInMinutes} mins`}
                />
                <StatisticItem
                    iconName={'heart'}
                    data={`${foodData.healthScore}`}
                />
                <StatisticItem
                    iconName={'dollar-sign'}
                    data={`${(foodData.pricePerServing/100).toString().substring(0,3)} USD`}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    nameContainer: {
        flexDirection: 'column',

    },
    row: {
        flexDirection: 'row'
    },
    rateContainer: {
        flexDirection: 'row'
    },
    statisticContainer: {
        flexDirection: 'row',
        marginVertical: 13,
        justifyContent: 'space-between',
        width: '70%'
    },
    foodName: {
        fontWeight: '700',
        fontSize: 22,
        marginVertical: 4
    },
    lightTxt: {
        color: 'gray',
        fontSize: 8,
        fontWeight: '300'
    }
})

export default GeneralInfo