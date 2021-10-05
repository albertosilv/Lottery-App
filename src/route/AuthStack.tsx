import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screen/Login'
import Registration from '../screen/Registration'
import ForgotPassword from '../screen/ForgotPassword'
export type AuthStackParamList = {
    Login: undefined;
    ForgotPassword: undefined;
    Registration: undefined
};
const Auth = createStackNavigator<AuthStackParamList>();
const AuthStackScreen: React.FC = () => {
    return (
            <Auth.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Auth.Screen name="Login" component={Login} />
                <Auth.Screen name="Registration" component={Registration} />
                <Auth.Screen name="ForgotPassword" component={ForgotPassword} />
            </Auth.Navigator>
    )
}
export default AuthStackScreen