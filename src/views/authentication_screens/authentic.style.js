const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        margin: 8
    },
    header: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 8
    },
    haveAccountContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    clickableTxt: {
        color: 'green'
    }
})