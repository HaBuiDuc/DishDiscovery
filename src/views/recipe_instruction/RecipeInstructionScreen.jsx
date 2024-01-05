import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import InstructionStep from '../../components/recipe_instruction/InstructionStep'
import CustomHeader from '../../components/common/custom_header/CustomHeader'
import RenderHTML from 'react-native-render-html'

const RecipeInstructionScreen = ({ route, navigation }) => {
    const { foodData } = route.params
    const instruction = foodData.instructions
    const detailInstruction = foodData.analyzedInstructions[0].steps
    const windowWidth = useWindowDimensions().width
    console.log(detailInstruction);


    React.useLayoutEffect(() => {
        navigation.setOptions({
            header: () => (
                <CustomHeader
                    title={foodData.title}
                    leftIconName='arrow-left'
                    onLeftPress={() => navigation.pop()}
                />
            )
        })
    })
    return (
        <ScrollView
            style={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.instructionsTitle}>Instruction</Text>
            <RenderHTML
                source={{ html: instruction }}
                contentWidth={windowWidth}
            />
            {/* <Text style={styles.instructionContent}>{instruction}</Text> */}
            <Text style={styles.instructionsTitle}>Instruction details</Text>
            {
                detailInstruction.map((data) => (
                    <InstructionStep
                        instruction={data}
                        key={data.number}
                    />
                ))
            }
        </ScrollView>
    )
}

export default RecipeInstructionScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 16,
        flex: 1,
    },
    instructionsTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    instructionContent: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey'
    }
})