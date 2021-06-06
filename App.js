/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type { Node } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/home';
import EmployeeDetail from './src/screens/employeeDetail';

const Stack = createStackNavigator();
const App: () => Node = () => {

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5d565297300000680030a986')
      .then((res) => res.json())
      .then(async (json) =>
        await AsyncStorage.setItem('datas', JSON.stringify(json))
      )
  })

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="EmployeeDetail" component={EmployeeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
