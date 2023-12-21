import React from 'react'
import { Stack } from './Stack'
import { LoginScreen } from '../views/authentication_screens/LoginScreen'
import { RegisterScreen } from '../views/authentication_screens/RegisterScreen'

const AuthStack = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen
            name='Login'
            component={LoginScreen}
        />
        <Stack.Screen
            name='Register'
            component={RegisterScreen}
        />
    </Stack.Navigator>
  )
}

export default AuthStack