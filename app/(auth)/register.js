import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Introduce your data</Text>
      <TextInput
        value={name}
        style={styles.textInput}
        onChangeText={setName}
        placeholder="Name"
        placeholderTextColor={"#7a797d"}
      />
      <TextInput
        inputMode="email"
        value={email}
        style={styles.textInput}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor={"#7a797d"}
      />
      <TextInput
        value={password}
        style={styles.textInput}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor={"#7a797d"}
        secureTextEntry={true}
      />
      <TextInput
        value={passwordConfirmation}
        style={styles.textInput}
        onChangeText={setPasswordConfirmation}
        placeholder="Confirm your password"
        placeholderTextColor={"#7a797d"}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Sign up</Text>
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          gap: 10,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            color: "#7a797d",
          }}
        >
          Already a member?
        </Text>
        <Link href="/login" style={{ color: "#ffffff" }}>
          Login
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#784aed",
    height: 600,
    width: "100%",
    padding: 20,
  },
  title: {
    fontSize: 40,
    color: "#ffffff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
  textInput: {
    backgroundColor: "#1e1d21",
    fontSize: 14,
    color: "#ffffff",
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginTop: 20,
  },
  loginButton: {
    marginTop: 40,
    backgroundColor: "#7514f5",
    alignItems: "center",
    padding: 20,
    borderRadius: 30,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 20,
  },
});
