import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SingleItem from './SingleItem'
import Spacer from '../common/spacer/Spacer';

const InstructionStep = ({ instruction }) => {
    console.log(instruction.ingredients);
    return (
        <View style={styles.container}>
            <Text style={styles.stepTxt}>{`Step ${instruction.number}`}</Text>
            <Text style={styles.instructTxt}>{instruction.step}</Text>
            {
                (instruction.ingredients.length != 0) && (
                    <>
                        <Spacer height={8} />
                        <Text style={styles.materialTxt}>Ingredients: </Text>
                    </>
                )
            }
            {
                instruction.ingredients.map(data => (
                    <SingleItem
                        data={data}
                    />
                ))
            }
            {
                (instruction.equipment.length != 0) && (

                    <Text style={styles.materialTxt}>Equipment: </Text>
                )
            }
            {
                instruction.equipment.map(data => (
                    <SingleItem
                        data={data}
                    />
                ))
            }
        </View>
    )
}

export default InstructionStep

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginVertical: 8
    },
    stepTxt: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    materialTxt: {
        fontSize: 17,
        fontWeight: '600',
        fontStyle: 'italic'
    },
    instructTxt: {
        fontSize: 16,
        color: 'black'
    }
})