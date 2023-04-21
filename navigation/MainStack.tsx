import React from 'react'
//screens
import LoginScreen from '../screens/LoginScreen'
import ProductScreen from '../screens/ProductScreen'
import Details from '../screens/DetailScreen'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createNativeStackNavigator()


const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='LoginScreen'
            >
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="Product"
                    component={ProductScreen}
                    options={{ headerBackVisible: false }}
                />
                <Stack.Screen
                    name={'Detail'}
                    component={Details}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStack