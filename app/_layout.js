import { StyleSheet, View } from "react-native";
import React from "react";
import { Slot } from "expo-router";
import Header from "../components/header";
import Tabs from "../components/tabs";

const Layout = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.main}>
          <Slot />
        </View>
        <Tabs style={styles.tabs} />
      </View>
    </>
  );
};

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

export default Layout;
