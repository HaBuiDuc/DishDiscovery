import { StyleSheet, View } from 'react-native'
import React from 'react'

const HorizontalLine = () => {
    return <View style={styles.line} />;
};

const styles = StyleSheet.create({
    line: {
        backgroundColor: 'lightgray',
        width: '100%',
        height: 1,
        marginVertical: 16,
    },
});

export default HorizontalLine;
