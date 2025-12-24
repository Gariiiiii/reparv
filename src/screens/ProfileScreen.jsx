import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="#FAF8FF"
        barStyle="dark-content"
        translucent={false}
      />
      <Text style={styles.text}>This is Profile Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
  },
  text: {
    fontSize: 18,
    fontFamily: 'SegoeUI-Bold',
    color: '#1E293B',
  },
});
