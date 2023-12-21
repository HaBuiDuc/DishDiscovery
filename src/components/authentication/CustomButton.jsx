import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { styles } from "./authcomponent.style"

export const CustomButton = ({ placeholder, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.buttonTxt}>{placeholder}</Text>
        </TouchableOpacity>
    )
}
