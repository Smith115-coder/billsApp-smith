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
            icon={"download"}
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
            icon={"export"}
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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#784aed",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 35,
    gap: 10,
  },
});
