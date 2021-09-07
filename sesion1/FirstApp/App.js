import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.color}>Juan Pablo Cabellos Aguilar 7D</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#fff',
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'center',
  },
  color: {
    color: '#fff',
  }
});
