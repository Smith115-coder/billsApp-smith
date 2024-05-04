import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { AuthContext } from "../../contexts/AuthContext";

export default function _layout() {
  return (
    <AuthContext.Provider>
      <SafeAreaProvider style={styles.container}>
        <StatusBar style="light" />
        <Slot />
      </SafeAreaProvider>
    </AuthContext.Provider>
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
