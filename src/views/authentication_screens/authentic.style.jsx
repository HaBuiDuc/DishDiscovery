const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        margin: 16
    },
    greetingContainer: {
        flexDirection: 'column',
        marginVertical: 24   
    },
    headerTxt: {
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 4
    },
    greetingTxt: {
        fontSize: 16,
        fontWeight: "medium",
    },
    haveAccountContainer: {
        flexDirection: "row",
        justifyContent: "center"
    },
    clickableTxt: {
        color: 'green'
    },
    forgotPwContainer: {
        alignSelf: 'flex-end',
        marginTop: 16,
        marginBottom: 8
    }
})