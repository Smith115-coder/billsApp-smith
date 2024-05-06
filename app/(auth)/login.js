import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router/build";
import { login, loadUser } from "../../services/AuthService";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoggin, setIsLoggin] = useState(false);
  const router = useRouter();

  const handleLoginRequest = async () => {
    setErrors({});
    setIsLoggin(true);

    try {
      await login({
        email,
        password,
        device_name: `${Platform.OS} ${Platform.Version}`,
      });

      const user = await loadUser();
      if (user.data.attributes.name) router.replace("/home");
    } catch (error) {
      if (error.response?.status === 422) setErrors(error.response.data.errors);
      setIsLoggin(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>
      <Text style={styles.subtitle}>Please enter your credentials</Text>
      <TextInput
        inputMode="email"
        value={email}
        style={styles.textInput}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor={"#7a797d"}
        autoCapitalize="none"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <TextInput
        value={password}
        style={styles.textInput}
        onChangeText={setPassword}
        placeholder="Password"
        placeholderTextColor={"#7a797d"}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      {errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginRequest}>
        <Text style={styles.loginButtonText}>Login</Text>
        {isLoggin && (
          <ActivityIndicator
            style={{ marginLeft: 20 }}
            color={"#ffffff"}
            size={"small"}
          />
        )}
      </TouchableOpacity>
      <View style={styles.registerSection}>
        <Text
          style={{
            color: "#7a797d",
          }}
        >
          Don't have an account?
        </Text>
        <Link href="/register" style={{ color: "#ffffff" }}>
          Register
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    width: "100%",
    backgroundColor: "#1e1d21",
    fontSize: 14,
    color: "#ffffff",
    borderRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginTop: 10,
  },
  loginButton: {
    width: "100%",
    flexDirection: "row",
    marginTop: 40,
    backgroundColor: "#784aed",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 30,
  },
  loginButtonText: {
    color: "#ffffff",
    fontSize: 20,
  },
  errorText: {
    color: "red",
  },
  registerSection: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
    marginTop: 15,
  },
});
