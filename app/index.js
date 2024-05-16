import React, { useEffect, useState } from "react";
import { Redirect, useRouter } from "expo-router";
import { loadUser } from "../services/AuthService";
import { setToken } from "../services/TokenService";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import axios from "axios";

export default function Home() {
  const [error, setError] = useState();
  const router = useRouter();

  // async function httpRequest() {
  //   await axios
  //     .post(
  //       "http://192.168.31.248/api/v1/sanctum/login",
  //       {
  //         email: "danielpf.dev@mail.com",
  //         password: "password",
  //         device_name: "celular",
  //       },
  //       {
  //         headers: {
  //           Accept: "application/vnd.api+json",
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error.response.data);
  //       setError(error.response.data.errors.email)
  //     });
  // }

  // httpRequest();

  async function handleVerifyUser() {
    // router.replace("/home");
    // await loadUser()
    //   .then((response) => {
    //     if (response.data.attributes.name) router.replace("/home");
    //   })
    //   .catch((error) => {
    //     console.log("Failed to load user -", error);
    //     setToken(null);
    //     router.replace("/login");
    //   });
  }

  useEffect(() => {
    handleVerifyUser();
  }, []);

  return (
    <View style={styles.container}>
      <Redirect href={"/home"} />
      {/* <ActivityIndicator color="#784aed" size="large" />
      <Text style={styles.text}></Text> */}
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
