import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Scr/Home.js';
import Login from './Scr/Login.js';
import Register from './Scr/Register.js'; 
import MenuScreen from './Scr/CartScreen.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registro" component={Register} />
        <Stack.Screen name="Menu" component={MenuScreen} />
       </Stack.Navigator>
    </NavigationContainer>
  );
}