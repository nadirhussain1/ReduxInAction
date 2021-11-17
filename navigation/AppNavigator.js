import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AddTaskWindowScreen from '../screens/AddTaskWindowScreen';

const Stack =  createStackNavigator();

function AppNavigator(){
  return(
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />

          <Stack.Screen
            name="AddTask"
            component={AddTaskWindowScreen}
          />

       </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
