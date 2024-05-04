import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
  const user = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    width: "100%",
    backgroundColor: "#784aed",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 45,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
    paddingBottom: 15,
  },
});
