import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomHeader from '../../components/common/custom_header/CustomHeader'
import EditProfileField from '../../components/account/EditProfileField'
import { UserProfileContext } from '../../contexts/UserProfileContext'
import { updateUserFromFirestore } from '../../../firebase/FirebaseService'

const EditProfileScreen = ({ navigation }) => {
    const { userProfile } = useContext(UserProfileContext)
    const [name, setName] = useState(userProfile.fullName)
    const [email, setEmail] = useState(userProfile.email)
    const [phoneNumber, setPhoneNumber] = useState(userProfile.phoneNumber)

    const onEditSubmit = () => {
        const newUser = {
            ...userProfile,
            fullName: name,
            email: email,
            phoneNumber: phoneNumber
        }

        updateUserFromFirestore(newUser, () => {
            navigation.pop()
        })
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            header: () => (
                <CustomHeader
                    title={'Edit Profile'}
                    leftIconName='arrow-left'
                    onLeftPress={() => navigation.pop()}
                    rightIconName='check'
                    onRightPress={onEditSubmit}
                />
            )
        })
    })
    return (
        <View style={styles.container}>
            <EditProfileField
                value={name}
                placeholder={'Enter your name'}
                onValueChange={setName}
                label={'Name'}
            />
            <EditProfileField
                value={email}
                placeholder={'Enter your email'}
                onValueChange={setEmail}
                label={'Email'}
            />
            <EditProfileField
                value={phoneNumber}
                placeholder={'Enter your phone number'}
                onValueChange={setPhoneNumber}
                label={'Phone number'}
            />
        </View>
    )
}

export default EditProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        margin: 16
    }
})