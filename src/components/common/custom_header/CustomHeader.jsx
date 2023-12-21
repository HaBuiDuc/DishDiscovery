import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';

const CustomHeader = ({
    title,
    leftIconName='',
    onLeftPress,
    rightIconName='',
    onRightPress
}) => {
    return (
        <View style={styles.container}>
            {
                (leftIconName !== '') && (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onLeftPress}
                    >
                        <Feather name={leftIconName} size={24} />
                    </TouchableOpacity>
                )
            }
            <Text
                style={styles.headerTitle}
            >
                {title}
            </Text>
            {
                (rightIconName !== '') && (
                    <TouchableOpacity
                        style={styles.button}
                        onPress={onRightPress}
                    >
                        <Feather name={rightIconName} size={24} />
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

export default CustomHeader
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        padding: 12,
        backgroundColor: 'white'
    },
    headerTitle: {
        flex: 1,
        fontWeight: '500',
        fontSize: 16
    },
    button: {
        marginEnd: 16
    }
})
