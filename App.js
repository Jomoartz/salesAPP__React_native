import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './app/screens/RegisterScreen';
import LoginScreen from './app/screens/LoginScreen'
import WelcomeScreen from './app/screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator= () => {
  return (<NavigationContainer>
  <Stack.Navigator initialRouteName='Welcome'>
  <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
  </Stack.Navigator>
</NavigationContainer>
);}

export default function App() {

  
  return (
    <AuthNavigator/>
)}

     




