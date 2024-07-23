import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen'
import WelcomeScreen from '../screens/WelcomeScreen';
import navigationTheme from '../components/navigationTheme';


const Stack = createNativeStackNavigator();


function AuthNavigator(props) {
    return(
    <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}} >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Login" component={LoginScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
      );
}

export default AuthNavigator;  