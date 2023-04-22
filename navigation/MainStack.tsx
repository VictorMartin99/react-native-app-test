import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import ProductScreen from '../screens/ProductScreen'
import Details from '../screens/DetailScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

// Creating a stack navigator using the imported createNativeStackNavigator component
const Stack = createNativeStackNavigator()

// Defining the MainStack component, which renders the NavigationContainer and Stack Navigator components
const MainStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='LoginScreen' // Setting the initial route to be the LoginScreen component
            >
                <Stack.Screen
                    name="Login" // Naming the first screen "Login"
                    component={LoginScreen} // Setting the component for the first screen to be the LoginScreen component
                />
                <Stack.Screen
                    name="Product" // Naming the second screen "Product"
                    component={ProductScreen} // Setting the component for the second screen to be the ProductScreen component
                    options={{ headerBackVisible: false }} // Setting an option to hide the back button in the header of the second screen
                />
                <Stack.Screen
                    name={'Detail'} // Naming the third screen "Detail"
                    component={Details} // Setting the component for the third screen to be the Details component
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

// Exporting the MainStack component
export default MainStack