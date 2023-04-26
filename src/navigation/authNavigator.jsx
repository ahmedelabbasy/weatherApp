import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CitiesScreen from '../screens/CitiesScreen';
import HistoricalScreen from '../screens/HistoricalScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {

    return (

        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Cities" component={CitiesScreen} />
          <Stack.Screen name="Historical" component={HistoricalScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      )
}

export default AuthNavigator;