import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";
import Header from "../../components/header";
import Tabs from "../../components/tabs";
import { StatusBar } from "expo-status-bar";
import { loadUser } from "../../services/AuthService";
import { AuthContext } from "../../contexts/AuthContext";

export default function HomeLayout() {
  const [user, setUser] = useState();

  async function handleVerifyUser() {
    try {
      const userLoaded = await loadUser();
      setUser(userLoaded.data.attributes.name);
    } catch (error) {
      console.log("Failed to load user", error);
    }
  }

  useEffect(() => {
    handleVerifyUser();
  }, [user]);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <AuthContext.Provider value={user}>
        <Header />
      </AuthContext.Provider>
      <Slot style={styles.main} />
      <Tabs style={styles.tabs} />
    </View>
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
