import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screen/Login';
import RootStackScreen from './src/route/RootStack';
export default function App() {
  return (
          <RootStackScreen/>
  );
}

