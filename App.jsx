import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet, Text} from 'react-native';

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = {
  fontFamily: 'SegoeUI-Regular',
};

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <StatusBar
        backgroundColor="#FAF8FF"
        barStyle="dark-content"
        translucent={false}
      />
      <AppNavigator />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
});
