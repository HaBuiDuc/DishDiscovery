import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import { CustomButton } from '../../components/authentication/CustomButton'
import CustomHeader from '../../components/common/custom_header/CustomHeader'
import { resetPasswordEmail } from '../../../firebase/FirebaseService'

const ForgotPasswordScreen = ({navigation}) => {
    const [email, setEmail] = useState('')

    const resetEmailSend = () => {
        resetPasswordEmail(email, () => {
            navigation.pop()
        })
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            header: () => (
                <CustomHeader
                    title={'Forgot password'}
                    leftIconName='arrow-left'
                    onLeftPress={() => navigation.pop()}
                />
            )
        })
    })
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Feather name='lock' size={40} color='white' />
            </View>
            <Text style={styles.forgotPwTxt}>Forgot password</Text>
            <Text style={styles.guidanceTxt}>Enter the email associated with your account and we will send an email to reset your password!</Text>
            <View style={styles.emailInputContainer}>
                <Feather name='mail' size={20} color={'grey'}/>
                <TextInput
                    style={styles.emailInput}
                    value={email}
                    onChangeText={setEmail}
                    placeholder={'Email'}
                    autoCapitalize='none'
                    autoCorrect={false}
                />
            </View>
            <CustomButton
                placeholder={'Send email'}
                onPress={resetEmailSend}
            />
        </View>
    )
}

export default ForgotPasswordScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        backgroundColor: 'green',
        padding: 16,
        borderRadius: 999
    },
    forgotPwTxt: {
        fontWeight: '600',
        fontSize: 32,
        marginVertical: 16
    },
    guidanceTxt: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey'
    },
    emailInputContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        marginVertical: 8
    },
    emailInput: {
        paddingHorizontal: 16,
        marginVertical: 16,
        width: '100%'
    },
})