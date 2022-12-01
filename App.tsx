// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './scr/screens/Home';
import Register from './scr/screens/Register';
import Doubts from './scr/screens/Doubts';
import Logo from './components/Logo/logo';
import { Button } from 'react-native';
import IncubatorData from './scr/screens/IncubatorData';

const Stack = createNativeStackNavigator()

const screenOptionsObj: any = {
  headerTitle: () => (<Logo width={100} />),
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: '#fff'
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptionsObj}
        initialRouteName='Menu'>
        <Stack.Screen
          name='Menu'
          component={Home}
        />
        <Stack.Screen
          name='Registrar'
          component={Register}
        />
        <Stack.Screen
          name='Dúvidas'
          component={Doubts}
        />
        <Stack.Screen
          name='Dados'
          component={IncubatorData}
        />
      </Stack.Navigator>
    </NavigationContainer>


  );
}

