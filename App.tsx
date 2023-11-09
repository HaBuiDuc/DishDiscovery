/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './src/views/detail_screen/DetailScreen';
import MainBottom from './src/navigation/MainBottom';
import { Stack } from './src/navigation/Stack';
import SearchScreen from './src/views/search_screen/SearchScreen';
import SearchContainer from './src/components/search/search_container/SearchContainer';
import Screen from './src/navigation/Screen';

function App(): JSX.Element {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={Screen.MainBottom}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name={Screen.MainBottom} component={MainBottom} />
          <Stack.Screen
            name={Screen.DetailScreen}
            component={DetailScreen}
            options={{

            }}
          />
          <Stack.Screen
            name={Screen.SearchScreen}
            component={SearchScreen}
            options={{
              headerShown: true,
              // header: ({navigation}) => <SearchContainer 
              //   onPopBack={() => navigation.goBack()}
              // />
            }}
          />
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
