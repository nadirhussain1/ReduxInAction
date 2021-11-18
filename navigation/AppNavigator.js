import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import AddTaskWindowScreen from '../screens/AddTaskWindowScreen';

const Stack =  createStackNavigator();

function AppNavigator(){
  return(
    <NavigationContainer>
       <Stack.Navigator
         presentation='modal'
         screenOptions={{
           cardStyle:{backgroundColor: 'transparent'},
           cardOverlayEnabled:true,
           headerShown:false,
           cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1]
              })
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp'
              })
            }
          })

         }}

       >
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
