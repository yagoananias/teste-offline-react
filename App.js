import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './src/RootStack';

export default function App() {
  return (
    <RootStack  style={styles.container}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
