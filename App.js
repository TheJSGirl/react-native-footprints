import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ListScreen from './src/screens/ListScreen';
import FlatListScreen from './src/screens/FlatListScreen';
import ImageListScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CouterScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen  name="ListScreen" component={ListScreen} />
        <Stack.Screen  name="FlatListScreen" component={FlatListScreen} />
        <Stack.Screen  name="ImageListScreen" component={ImageListScreen} />
        <Stack.Screen  name="CounterScreen" component={CounterScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;


