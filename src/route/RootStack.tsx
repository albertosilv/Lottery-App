import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import AuthStackScreen from './AuthStack';
import MainStackScreen from './MainStack';
export type AuthStackParamList = {
    Main: undefined;
    Auth: undefined;
};
const Root = createStackNavigator<AuthStackParamList>();
const RootStackScreen: React.FC = () => {
    return (
        <NavigationContainer>
            <Root.Navigator initialRouteName="Auth" screenOptions={{
                headerShown: false,
            }}>
                <Root.Screen name="Auth" component={AuthStackScreen} />
                <Root.Screen name="Main" component={MainStackScreen} />
            </Root.Navigator>
            </NavigationContainer>
    )
}
export default RootStackScreen