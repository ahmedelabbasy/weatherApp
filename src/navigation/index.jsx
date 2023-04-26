import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import authNavigator from './authNavigator';
import Splash from '../screens/Splash';

const Stack = createNativeStackNavigator();
  
const RootNav = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: false,
                }}>
                <Stack.Screen name='Splash' component={Splash} />
                <Stack.Screen name="auth" component={authNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default RootNav;