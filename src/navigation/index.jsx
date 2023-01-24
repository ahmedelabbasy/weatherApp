import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './authNavigator';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}>
                <Stack.Screen name='splash' component={Splash} />
                <Stack.Screen name="auth" component={AuthNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;