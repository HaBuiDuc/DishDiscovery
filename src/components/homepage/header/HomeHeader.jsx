import { Image, Text, View, StyleSheet } from "react-native"

export const HomeHeader = ({userName, userAvatar}) => {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.greetingContainer}>
                <View style={styles.row}>
                    <Text style={styles.greetingTxt}>{`Hello, ${userName}`}</Text>
                </View>
                <View style={{height: 4}}/>
                <Text style={styles.headerBoldTxt}>What would you like to cook today?</Text>
            </View>
            <Image
                style={styles.avatar}
                source={userAvatar}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        backgroundColor: 'transparent'
    },
    greetingContainer: {
        flexDirection: "column",
        flex: 0.8
    },
    greetingTxt: {
        color: 'dimgrey',
        fontWeight: '500',
        fontSize: 16
    },
    row: {
        flexDirection: "row"
    },
    headerBoldTxt: {
        fontSize: 24,
        fontWeight: "bold",
        flexWrap: "wrap"
    },
    avatar: {
        width: 48,
        aspectRatio: 1,
        borderRadius: 999,
        alignSelf: "center",
    }
})