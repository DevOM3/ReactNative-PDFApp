import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ElementsScreen from '../screens/ElementsScreen';
import SubElementsScreen from '../screens/SubElementsScreen';

const Stack = createStackNavigator();

const RouteStack = () => {
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ElementsScreen" component={ElementsScreen} />
      <Stack.Screen name="SubElementsScreen" component={SubElementsScreen} />
    </Stack.Navigator>
  );
};

export default RouteStack;
