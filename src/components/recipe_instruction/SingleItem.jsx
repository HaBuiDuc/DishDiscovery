import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Spacer from '../common/spacer/Spacer'
import { parseImgUrl } from '../../utils/ParseImgUrl'
import { capitalizeFirstLetter } from '../../utils/ExtendFunc'

const SingleItem = ({ data }) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{ uri: parseImgUrl(data.image) }}
            />
            <Spacer width={8} />
            <Text style={styles.txt}>{capitalizeFirstLetter(data.name)}</Text>
        </View>
    )
}

export default SingleItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4
    },
    txt: {
        fontSize: 14,
        color: 'black',
        fontWeight: '500'
    },
    img: {
        width: 40,
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