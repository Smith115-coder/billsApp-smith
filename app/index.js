import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { loadUser } from "../services/AuthService";
import { setToken } from "../services/TokenService";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleVerifyUser() {
    setIsLoading(true);
    await loadUser()
      .then((response) => {
        if (response.data.attributes.name) router.replace("/home");
      })
      .catch((error) => {
        console.log("Failed to load user -", error);
        setToken(null);
        router.replace("/login");
      });
  }

  useEffect(() => {
    handleVerifyUser();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator color="#784aed" size="large" />
      <Text style={styles.text}>Cargando datos..</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000017",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    marginTop: 10,
  },
});
