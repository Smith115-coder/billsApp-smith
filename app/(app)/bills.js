import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Bills() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bills</Text>
      {/* <View style={styles.main}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 20,
    color: "#38434D",
  },
});
