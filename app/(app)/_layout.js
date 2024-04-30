import React from "react";
import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";

export default function HomeLayout() {
  return (
    <>
      <View style={styles.container}>
        <Header />
        <Slot style={styles.main} />
        <Tabs style={styles.tabs} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    alignItems: "center",
    justifyContent: "space-between",
  },
  main: {
    height: "100%",
    position: "absolute",
  },
});
