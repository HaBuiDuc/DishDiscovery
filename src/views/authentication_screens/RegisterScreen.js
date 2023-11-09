import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { styles } from "./authentic.style"
import { AuthInputField } from "../../components/authentication/AuthInputField"
import { CustomButton } from "../../components/authentication/CustomButton"
import { useState } from "react"

export const RegisterScreen = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Create an account</Text>
            <AuthInputField
                value={username}
                onChangeValue={setUsername}
                placeholder={'Username'}
            />
            <AuthInputField
                value={email}
                onChangeValue={setEmail}
                placeholder={'Email or phone number'}
            />
            <AuthInputField
                value={password}
                onChangeValue={setPassword}
                placeholder={'Password'}
                secureTextEntry={true}
            />
            <CustomButton
                placeholder={'Sign up'}
            />
            <View style={styles.haveAccountContainer}>
                <Text>Already have an account? </Text>
                <Text 
                    style={styles.clickableTxt}
                    onPress={() => {}}
                >Log in</Text>
            </View>
        </SafeAreaView>
    )
}
