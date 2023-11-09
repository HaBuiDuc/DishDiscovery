import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: 'green',
        paddingVertical: 12,
        alignItems: "center",
        borderRadius: 8,
        marginVertical:16 
    },
    buttonTxt: {
        fontSize: 16,
        fontWeight: '400',
        color: 'white',
        fontWeight: '600'
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