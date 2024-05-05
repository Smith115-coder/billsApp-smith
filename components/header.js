import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { logout } from "../services/AuthService";
import { useRouter } from "expo-router";

export default function Header(props) {
  const router = useRouter();

  const handleLogout = async () => {
    await logout().then(() => {
      router.replace("login");
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Salir</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 18,
    fontWeight: "400",
  },
  logoutContainer: {
    alignItems: "flex-end",
    width: "100%",
  },
  logoutButton: {
    alignItems: "flex-end",
    color: "#ffffff",
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  logoutText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
