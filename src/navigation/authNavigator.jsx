import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PostDetails from '../screens/PostDetails';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {

    return (

        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name="postDetails" component={PostDetails} />
        </Stack.Navigator>
      )
}

export default AuthNavigator;