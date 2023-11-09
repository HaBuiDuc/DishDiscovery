import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { parseImgUrl } from '../../../utils/ParseImgUrl'
import Spacer from '../../shared/Spacer'
import { capitalizeFirstLetter } from '../../../utils/ExtendFunc'

const IngredientItem = ({ ingredientData }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Image
                    style={styles.img}
                    source={{ uri: parseImgUrl(ingredientData.image) }}
                />
                <Spacer width={8}/>
                <Text style={styles.txt}>{capitalizeFirstLetter(ingredientData.name)}</Text>
            </View>
            <Text style={styles.txt}>{`${ingredientData.measures.metric.amount} g`}</Text>
        </View>
    )
}

export default IngredientItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 8
    },
    txt: {
        fontSize: 16,
        color: 'black',
        fontWeight: '600'
    },
    img: {
        width: 48,
        aspectRatio: 1,
        borderRadius: 8,
        backgroundColor: 'lightgray',
        padding: 4
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})