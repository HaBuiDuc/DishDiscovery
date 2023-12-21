import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        paddingVertical: 12,
        alignItems: "center",
        borderRadius: 8,
        marginVertical: 24
    },
    buttonTxt: {
        fontSize: 18,
        color: 'white',
        fontWeight: '700'
    },
    container: {
        flexDirection: "row",
        backgroundColor: 'rgb(238,238,238)',
        borderRadius: 8,
        marginVertical: 10
    },
    textInput: {
        width: '100%',
        paddingHorizontal: 8,
        paddingVertical: 16
    }
})