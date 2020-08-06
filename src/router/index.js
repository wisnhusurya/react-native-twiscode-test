import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
    ListSeafood,
    DetailSeafood,
} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListSeafood">
                <Stack.Screen name="ListSeafood" component={ListSeafood} options={{ headerShown: false }} />
                <Stack.Screen name="DetailSeafood" component={DetailSeafood} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;