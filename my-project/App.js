import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./components/login";

export default function App() {
  return (
    <View style={styles.container}>
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fbf7f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
