import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecentGames from '../screen/RecentGames';
import Game from '../screen/Game';
export type RootStackParamList = {
    RecentGames: undefined;
    Game: undefined;
};
const Main = createBottomTabNavigator<RootStackParamList>();
const MainStackScreen: React.FC = () => {
    return (
            <Main.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Main.Screen name="RecentGames" component={RecentGames} />
                <Main.Screen name="Game" component={Game} />
            </Main.Navigator>
    )
}
export default MainStackScreen