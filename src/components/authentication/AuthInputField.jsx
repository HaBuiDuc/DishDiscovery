import { Image, StyleSheet, Text, TextInput, View } from "react-native"
import { styles } from "./authcomponent.style"

export const AuthInputField = ({
    value,
    onChangeValue,
    placeholder,
    secureTextEntry=false

}) => {
    return (
        <View style={styles.container}>
            {
            }
            <TextInput
                style={styles.textInput}
                value={value}
                onChangeText={onChangeValue}
                placeholder={placeholder}
                placeholderTextColor={'black'}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}
