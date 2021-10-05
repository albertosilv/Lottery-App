import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screen/Login';
import MainStackScreen from './src/route/MainStack';
export default function App() {
  return (
          <MainStackScreen/>
  );
}

