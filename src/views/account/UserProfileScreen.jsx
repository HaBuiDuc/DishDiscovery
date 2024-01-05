import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import ProfileField from '../../components/account/ProfileField'
import HorizontalLine from '../../components/account/HorizontalLine'
import { UserProfileContext } from '../../contexts/UserProfileContext'
import { firebaseSignOut } from '../../../firebase/FirebaseService'
import AuthStateContext from '../../contexts/AuthStateContext'
import { AppRegistry } from 'react-native'
import AppScreen from '../../navigation/AppScreen'
import Spacer from '../../components/common/spacer/Spacer'

const UserProfileScreen = ({navigation}) => {
  const { userProfile } = useContext(UserProfileContext)
  const { setUser } = useContext(AuthStateContext)

  if (userProfile == null) {
    return
  }

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/images/image.jpeg')}
        />
        <Spacer height={40} />
        <ProfileField title={'User name'} value={userProfile.fullName} />
        <HorizontalLine />
        <ProfileField title={'Email'} value={userProfile.email} />
        <HorizontalLine />
        <ProfileField title={'Phone'} value={userProfile.phoneNumber} />
        <HorizontalLine />
        <ProfileField title={'Gender'} value={(userProfile.gender) ? 'Male' : 'Female'} />
        <HorizontalLine />
        <ProfileField title={'Date of birth'} value={userProfile.dateOfBirth} />
      </View>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate(AppScreen.EditProfile)
          }}
        >
          <Text style={styles.buttonTxt}>Edit Profile</Text>
        </TouchableOpacity>
        <Spacer width={16} />
        <TouchableOpacity
          onPress={() => {
            firebaseSignOut(() => {
              setUser(false)
            })
          }}
          style={styles.button}
        >
          <Text style={styles.buttonTxt}>Log out</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserProfileScreen

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    margin: 16,
    justifyContent: 'center'
  },
  cardContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 1,
    padding: 16
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 999,
  },
  button: {
    backgroundColor: '#FF5F24',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    flex: 1,
    alignItems: 'center',
  },
  buttonTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})