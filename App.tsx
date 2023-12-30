/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './src/views/detail_screen/DetailScreen';
import MainBottom from './src/navigation/MainBottom';
import { Stack } from './src/navigation/Stack';
import SearchScreen from './src/views/search_screen/SearchScreen';
import AppScreen from './src/navigation/AppScreen';
import AuthStack from './src/navigation/AuthStack';
import { User, onAuthStateChanged, sendEmailVerification } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebase/FirebaseConfig';
import AddUserInfoScreen from './src/views/authentication_screens/AddUserInfoScreen';
import { checkUserExistsInFirestore, getUserFromFirestore } from './firebase/FirebaseService';
import { UserProfileContext } from './src/contexts/UserProfileContext';
import FoodByCategoryScreen from './src/views/food_by_categories/FoodByCategoryScreen';
import { SpoonacularInfoContext } from './src/contexts/SpoonacularInfoContext';
import connectUserToSpoonacular from './src/hook/connectUser';

function App(): JSX.Element {
  const auth = FIREBASE_AUTH
  console.log('auth', auth);

  const [user, setUser] = useState<User | null>(auth.currentUser)
  const [userExists, setUserExists] = useState<boolean | null>(null);

  const [userProfile, setUserProfile] = useState([])
  const [spoonacularInfo, setSpoonacularInfo] = useState(null)

  const onGetUserSuccess = (data: any) => {
    setUserProfile(data)
  }

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user?.emailVerified) {
        console.log('called');
        setUser(user)
        setUserExists(await checkUserExistsInFirestore())
        getUserFromFirestore(onGetUserSuccess)
        connectUserToSpoonacular(userProfile, setSpoonacularInfo)
      } else {
        sendEmailVerification(user as User)
      }
    })
  }, [])


  return (

    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      <SpoonacularInfoContext.Provider value={spoonacularInfo}>
        <SafeAreaView style={styles.container}>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName={'MainBottom'}
              screenOptions={{
                headerShown: false,
              }}
            >
              {
                (user) ?
                  (
                    (userExists) ? (
                      <>
                        <Stack.Screen name={AppScreen.MainBottom} component={MainBottom} />
                        <Stack.Screen
                          name={AppScreen.DetailScreen}
                          component={DetailScreen}
                          options={{}}
                        />
                        <Stack.Screen
                          name={AppScreen.SearchScreen}
                          component={SearchScreen}
                          options={{
                            headerShown: true,
                          }}
                        />
                        <Stack.Screen
                          name={AppScreen.FoodByCategoryScreen}
                          component={FoodByCategoryScreen}
                          options={{
                            headerShown: true,
                          }}
                        />
                      </>
                    ) : (
                      <Stack.Screen name='AddInfo' component={AddUserInfoScreen} />
                    )
                  ) : (
                    <Stack.Screen name='AuthStack' component={AuthStack} />
                  )
              }
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SpoonacularInfoContext.Provider>
    </UserProfileContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(247,247,247)',
    flex: 1
  }
})

export default App;
