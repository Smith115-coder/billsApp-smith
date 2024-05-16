import { StyleSheet, View } from "react-native";
import React from "react";
import TabLink from "./tablink";
import { usePathname } from "expo-router";

export default function Tabs() {
  const pathName = usePathname();

  return (
    <View style={styles.container}>
      <View style={styles.shadow}>
        <View style={styles.tabs}>
          <TabLink
            text={"Incomes"}
            href={"/incomes"}
            icon={"cash-plus"}
            active={pathName === "/incomes"}
          />
          <TabLink
            text={"Home"}
            href={"/home"}
            icon={"home"}
            active={pathName === "/home"}
          />
          <TabLink
            text={"Bills"}
            href={"/bills"}
            icon={"cash-minus"}
            active={pathName === "/bills"}
          />
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
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#784aed",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 40,
    gap: 10,
  },
});
