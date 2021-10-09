import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screen/Login';
import RootStackScreen from './src/route/RootStack';
import { Provider } from 'react-redux'
import store from './src/store'
export default function App() {
  return (
    <Provider store={store}>
      <RootStackScreen />
    </Provider>
  );
}

