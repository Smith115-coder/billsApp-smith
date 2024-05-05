import { StyleSheet} from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

export default function _layout() {
  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar style="light" />
      <Slot />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000017",
    padding: 10,
  },
});
