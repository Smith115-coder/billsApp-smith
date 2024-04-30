import React from "react";
import { View, StyleSheet } from "react-native";
import { Redirect } from "expo-router";

export default function Home() {
  const user = false;

  if (!user) {
    console.log("user false");
    return <Redirect href="/login" />;
  }
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});
