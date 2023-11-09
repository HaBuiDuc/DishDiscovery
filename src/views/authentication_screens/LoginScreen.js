import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { AuthInputField } from "../../components/authentication/AuthInputField"
import { useState } from "react"
import { CustomButton } from "../../components/authentication/CustomButton"
import { styles } from "./authentic.style"

export const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Log in</Text>
            <AuthInputField
                value={email}
                onChangeValue={setEmail}
                placeholder={'Email'}
            />
            <AuthInputField
                value={password}
                onChangeValue={setPassword}
                placeholder={'Password'}
                secureTextEntry={true}
            />
            <CustomButton
                placeholder={'Login'}
            />
            <View style={styles.haveAccountContainer}>
                <Text>Don't have an account? </Text>
                <Text
                    style={styles.clickableTxt}
                    onPress={() => {}}
                >Sign up</Text>
            </View>
        </SafeAreaView>

    )
}
