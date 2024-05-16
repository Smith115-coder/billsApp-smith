import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Slot, useRouter } from "expo-router";
import Header from "../../components/header";
import Tabs from "../../components/tabs";
import { StatusBar } from "expo-status-bar";
import { loadUser } from "../../services/AuthService";
import { AuthContextProvider } from "../../contexts/AuthContext";
import { usePathname } from "expo-router";

export default function HomeLayout() {
  const pathName = usePathname().replace("/", "").toUpperCase();
  const router = useRouter();
  const [user, setUser] = useState();

  // useEffect(() => {
  //   async function handleVerifyUser() {
  //     await loadUser()
  //       .then((response) => {
  //         // console.log(response.data.attributes.name);
  //         setUser(response.data.attributes.name);
  //       })
  //       .catch((error) => {
  //         console.log("Failed to load user on HomeLayout -", error);
  //         // router.replace("login");
  //       });
  //   }

  //   handleVerifyUser();
  // }, [user]);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Header title={pathName} />
      <AuthContextProvider>
        <Slot style={styles.main} />
      </AuthContextProvider>
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
    width: "100%",
    padding: 20,
    zIndex: 1,
  },
  tabs: {
    flex: 1,
    position: "absolute",
    zIndex: 10,
  },
});
