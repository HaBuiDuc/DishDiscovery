import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Spacer from '../../shared/Spacer'
import RenderHTML from 'react-native-render-html'


const Description = ({ foodDes }) => {
    const windowWidth = useWindowDimensions().width
    const [isExpand, setExpand] = useState(false)
    console.log(typeof (foodDes));
    const description = (isExpand)
        ? foodDes
        : (foodDes)
    return (
        <View>
            <Text style={styles.title}>Description</Text>
            <Spacer height={8} />
            {/* <Text>{foodDes}</Text> */}
            <RenderHTML
                source={{ html: foodDes }}
                contentWidth={windowWidth}
            />
        </View>
    )
}

export default Description

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 18
    },
    desTxt: {
        color: 'gray',
        fontSize: 16
    }
})