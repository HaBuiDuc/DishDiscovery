import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { CategoriesItem } from './CategoriesItem'
import Spacer from '../../common/spacer/Spacer'

const Categories = ({ data, onCategorySelect }) => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTxt}>Categories</Text>
            </View>
            <Spacer height={16} />
            <FlatList
                horizontal={true}
                data={data}
                renderItem={({ item }) => (
                    <CategoriesItem
                        data={item}
                        onCategorySelect={onCategorySelect}
                    />
                )}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: "row"
    },
    headerTxt: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default Categories