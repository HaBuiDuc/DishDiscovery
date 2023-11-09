import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { styles } from "./authcomponent.style"

export const CustomButton = ({placeholder}) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTxt}>{placeholder}</Text>
        </TouchableOpacity>
    )
}
