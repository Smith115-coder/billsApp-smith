import { StyleSheet, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Tabs() {
  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <View style={styles.tabs}>
          <Link href="/incomes" style={styles.tab_link}>
            Ingresos
          </Link>
          <Link href="/auth/Login" style={styles.tab_link}>
            Home
          </Link>
          <Link href="/bills" style={styles.tab_link}>
            Gastos
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  shadow: {
    // borderRadius: 30,
    // shadowOffset: { width: 40, height: 40 },
    // shadowColor: "#784aed",
    // shadowOpacity: 1,
    // elevation: 5,
    // backgroundColor: "#0000",
    // padding: 1,
  },
  tabs: {
    flexDirection: "row",
    borderRadius: 30,
    justifyContent: "space-around",
    backgroundColor: "#7514f5",
  },
  tab_link: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 14,
    padding: 20,
  },
});
