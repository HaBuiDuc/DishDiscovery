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
import Screen from './src/navigation/Screen';
import AuthStack from './src/navigation/AuthStack';
import { User, onAuthStateChanged, sendEmailVerification } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebase/FirebaseConfig';
import AddUserInfoScreen from './src/views/authentication_screens/AddUserInfoScreen';
import { checkUserExistsInFirestore } from './firebase/FirebaseService';

function App(): JSX.Element {
  const auth = FIREBASE_AUTH
  console.log('auth', auth);

  const [user, setUser] = useState<User | null>(auth.currentUser)
  const [userExists, setUserExists] = useState<boolean | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user?.emailVerified) {
        setUser(user)
        setUserExists(await checkUserExistsInFirestore())
      } else {
        sendEmailVerification(user as User)
      }
    })
  }, [])


  return (
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
                    <Stack.Screen name={Screen.MainBottom} component={MainBottom} />
                    <Stack.Screen
                      name={Screen.DetailScreen}
                      component={DetailScreen}
                      options={{}}
                    />
                    <Stack.Screen
                      name={Screen.SearchScreen}
                      component={SearchScreen}
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

          {/* <Stack.Screen name='AddInfo' component={AddUserInfoScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(247,247,247)',
    flex: 1
  }
})

export default App;
