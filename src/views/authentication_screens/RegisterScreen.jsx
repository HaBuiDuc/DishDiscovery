import { Alert, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./authentic.style"
import { AuthInputField } from "../../components/authentication/AuthInputField"
import { CustomButton } from "../../components/authentication/CustomButton"
import { useState } from "react"
import AuthTextInput from "../../components/authentication/AuthTextInput"
import Spacer from "../../components/shared/Spacer"
import Feather from 'react-native-vector-icons/Feather'
import { FIREBASE_AUTH } from "../../../firebase/FirebaseConfig"
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import { firebaseSignUp } from "../../../firebase/FirebaseService"

export const RegisterScreen = ({ navigation }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordVis, setPasswordVis] = useState(true)
    const [isLoading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH

    // const emailVerification = (user) => {
    //     sendEmailVerification(user)
    //         .then(() => {
    //             // Email verification sent
    //             console.log("Email verification sent");
    //         })
    //         .catch((error) => {
    //             // Handle error
    //             console.error("Error sending email verification", error);
    //         });
    // }

    const signUp = () => {
        firebaseSignUp(email, password, setLoading)
    }

    const onHiddedPw = () => {
        setPasswordVis(!isPasswordVis)
    }
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.greetingContainer}>
                    <Text style={styles.headerTxt}>Create an account</Text>
                    <Text style={styles.greetingTxt}>Welcome to Discovery Dishes</Text>
                </View>
                <AuthTextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder={'Email'}
                    leadingIcon={<Feather name="mail" size={20} />}
                />
                <Spacer height={20} />
                <AuthTextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder={'Password'}
                    secureTextEntry={isPasswordVis}
                    leadingIcon={<Feather name="lock" size={20} />}
                    trailingIcon={
                        (password.length != 0) && (
                            (isPasswordVis) ? (
                                <TouchableOpacity
                                    onPress={onHiddedPw}
                                >
                                    <Feather name="eye-off" size={20} />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    onPress={onHiddedPw}
                                >
                                    <Feather name="eye" size={20} />
                                </TouchableOpacity>
                            )
                        )
                    }
                />
                <Spacer height={16} />
                <CustomButton
                    onPress={signUp}
                    placeholder={'Sign up'}
                />
                <View style={styles.haveAccountContainer}>
                    <Text>Already have an account? </Text>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Login') }}
                    >
                        <Text
                            style={styles.clickableTxt}
                        >Log in</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>

        </SafeAreaView>
    )
}
