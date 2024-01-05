import React from 'react'
import { Stack } from './Stack'
import { LoginScreen } from '../views/authentication_screens/LoginScreen'
import { RegisterScreen } from '../views/authentication_screens/RegisterScreen'
import ForgotPasswordScreen from '../views/authentication_screens/ForgotPasswordScreen'

const AuthStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Login'
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
        <Stack.Screen
            name='ForgotPassword'
            component={ForgotPasswordScreen}
            options={{
                headerShown: true,
            }}
        />
    </Stack.Navigator>
  )
}

export default AuthStack