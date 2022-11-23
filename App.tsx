// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './scr/screens/Home';
import Register from './scr/screens/Register';
import Doubts from './scr/screens/Doubts';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen 
            name='HomeScreen'
            component={Home}
          />
          <Stack.Screen 
            name='Register'
            component={Register}
          />
          <Stack.Screen 
            name='Doubts'
            component={Doubts}
          />
        </Stack.Navigator>
      </NavigationContainer>


  );
}

