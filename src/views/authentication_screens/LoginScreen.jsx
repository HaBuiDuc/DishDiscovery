import { Alert, SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import { useState } from "react"
import { CustomButton } from "../../components/authentication/CustomButton"
import { styles } from "./authentic.style"
import AuthTextInput from "../../components/authentication/AuthTextInput"
import Feather from 'react-native-vector-icons/Feather'
import { FIREBASE_AUTH } from "../../../firebase/FirebaseConfig"
import { firebaseSignIn } from "../../../firebase/FirebaseService"
import Spacer from "../../components/common/spacer/Spacer"

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordVis, setPasswordVis] = useState(true)
    const [isLoading, setLoading] = useState(false)
    const auth = FIREBASE_AUTH

    const signIn = () => {
        firebaseSignIn(email, password, setLoading)
    }

    const onHiddedPw = () => {
        setPasswordVis(!isPasswordVis)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.greetingContainer}>
                <Text style={styles.headerTxt}>Log in</Text>
                <Text style={styles.greetingTxt}>Welcome back</Text>
            </View>
            <AuthTextInput
                value={email}
                onChangeText={setEmail}
                placeholder={'Email'}
                leadingIcon={<Feather name="user" size={20} />}
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
            <TouchableOpacity
                style={styles.forgotPwContainer}
                onPress={() => navigation.navigate('ForgotPassword')}
            >
                <Text style={styles.clickableTxt}>Forgot password</Text>
            </TouchableOpacity>
            <CustomButton
                onPress={signIn}
                placeholder={'Login'}
            />
            <View style={styles.haveAccountContainer}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Register')
                    }}
                >
                    <Text
                        style={styles.clickableTxt}
                    >Sign up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}
