import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Spacer from "../../shared/Spacer"

export const CategoriesItem = ({ data, onCategorySelect }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {onCategorySelect(data)}}
        >
            <Image
                style={styles.itemImg}
                source={data.itemImg}
            />
            <Spacer height={4} />
            <Text style={styles.nameTxt}>{data.itemName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: 'white',
        justifyContent: "center",
        padding: 8,
        width: 76,
        height:68 
    },
    nameTxt: {
        color: 'black',
        fontSize: 12
    },
    itemImg: {
        width: 28,
        height: 28 
    }
})