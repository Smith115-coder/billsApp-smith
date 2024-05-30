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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Salir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    width: "100%",
    backgroundColor: "#13E0E0",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 45,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  titleContainer: {

    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    flex: 1, // Hace que el contenedor del título ocupe solo el espacio necesario
    alignItems: "center", // Centra el título horizontalmente
  },
  title: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "400",
  },
  logoutButton: {
    backgroundColor: "#D11747",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  logoutText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
