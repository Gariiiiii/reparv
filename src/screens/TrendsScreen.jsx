import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function TrendsScreen() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar
              backgroundColor="#FAF8FF"
              barStyle="dark-content"
              translucent={false}
            />
      <Text style={styles.text}>
        This is Trends Screen
      </Text>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
  },
  text: {
    fontSize: 18,
    fontFamily : "SegoeUI-Bold",
    color: "#1E293B",
  },
});
