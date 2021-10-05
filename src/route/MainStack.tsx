import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screen/Login'
import Registration from '../screen/Registration'
import ForgotPassword from '../screen/ForgotPassword'
export type RootStackParamList = {
    Login: undefined;
    ForgotPassword: undefined;
    Registration: undefined
};
const Stack = createStackNavigator<RootStackParamList>();
const MainStackScreen: React.FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainStackScreen