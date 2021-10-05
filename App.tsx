import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screen/Login';
export default function App() {
  return (
          <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
