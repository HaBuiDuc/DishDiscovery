import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AuthTextInput from '../../components/authentication/AuthTextInput'
import Feather from 'react-native-vector-icons/Feather'
import DropDownPicker from 'react-native-dropdown-picker';
import Spacer from '../../components/shared/Spacer';
import DatePicker from 'react-native-date-picker'
import { CustomButton } from '../../components/authentication/CustomButton';
import 'firebase/firestore';
import { FIREBASE_AUTH } from '../../../firebase/FirebaseConfig';
import { addUserToFirestore } from '../../../firebase/FirebaseService';

const AddUserInfoScreen = ({ navigation }) => {
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [gender, setGender] = useState('')
    const [date, setDate] = useState(new Date())
    const [datePickerOpen, setDatePickerOpen] = useState(false)
    const formattedDate = date.toLocaleDateString('en-GB')
    const auth = FIREBASE_AUTH

    const [genderSelectOpen, setGenderSelectOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'Male', value: true },
        { label: 'Female', value: false },
    ]);

    const addUserData = () => {
        const userData = {
            id: auth.currentUser.uid,
            fullName: fullName,
            phoneNumber: phoneNumber,
            dateOfBirth: date.toDateString(),
            gender: gender,
            email: auth.currentUser.email
        };

        addUserToFirestore(userData)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.greetingTxt}>Please enter your information</Text>
            <AuthTextInput
                value={fullName}
                onChangeText={setFullName}
                placeholder={'Full name'}
                leadingIcon={<Feather name="user" size={20} />}
            />
            <Spacer height={24} />
            <AuthTextInput
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder={'Phone number'}
                leadingIcon={<Feather name="phone" size={20} />}
            />
            <Spacer height={24} />

            <TouchableOpacity
                style={styles.dobSelect}
                onPress={() => setDatePickerOpen(true)}
            >
                <Text>{formattedDate}</Text>
            </TouchableOpacity>
            <Spacer height={24} />
            <DatePicker
                modal
                mode='date'
                open={datePickerOpen}
                date={date}
                onConfirm={(date) => {
                    setDatePickerOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setDatePickerOpen(false)
                }}
            />
            <DropDownPicker
                open={genderSelectOpen}
                value={gender}
                items={items}
                setOpen={setGenderSelectOpen}
                setValue={setGender}
                setItems={setItems}
                style={styles.dropDown}
                dropDownContainerStyle={{ backgroundColor: 'transparent' }}
            />
            <CustomButton
                onPress={addUserData}
                placeholder={'Submit'}
            />
        </View>
    )
}

export default AddUserInfoScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        margin: 16
    },
    dropDown: {
        width: '100%',
        height: 40,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginBottom: 10
    },
    greetingTxt: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 16
    },
    dobSelect: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'gray',
        justifyContent: 'center',
        padding: 14,
        borderRadius: 6
    }
})