import {
  ActivityIndicator,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import { loadUser, register } from "../../services/AuthService";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({});
  const [isRegistering, setIsRegistering] = useState(false);
  const router = useRouter();

  const handleRegisterRequest = async () => {
    setErrors({});
    setIsRegistering(true);

    try {
      await register({
        name,
        email,
        password,
        password_confirmation,
        device_name: `${Platform.OS} ${Platform.Version}`,
      });

      const user = await loadUser();
      console.log(user);
      if (user.data.attributes.name) router.replace("/home");
    } catch (error) {
      if (error.response?.status === 422) setErrors(error.response.data.errors);
      setIsRegistering(false);
    }
  };
  return (
    // <View style={styles.container}>
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        marginTop: 20,
      }}
    >
      <Text style={styles.title}>Register</Text>
      <Text style={styles.subtitle}>Introduce your data</Text>
      <TextInput
        value={name}
        style={styles.textInput}
        onChangeText={setName}
        placeholder="Name"
        placeholderTextColor={"#7a797d"}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
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
      <TextInput
        value={password_confirmation}
        style={styles.textInput}
        onChangeText={setPasswordConfirmation}
        placeholder="Confirm your password"
        placeholderTextColor={"#7a797d"}
        secureTextEntry={true}
        autoCapitalize="none"
      />
      {errors.password_confirmation && (
        <Text style={styles.errorText}>{errors.password_confirmation}</Text>
      )}
      <TouchableOpacity
        onPress={handleRegisterRequest}
        style={styles.registerButton}
      >
        <Text style={styles.registerButtonText}>Sign up</Text>
        {isRegistering && (
          <ActivityIndicator
            style={{ marginLeft: 20 }}
            color={"#ffffff"}
            size={"small"}
          />
        )}
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
    </ScrollView>
    // </View>
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
  registerButton: {
    width: "100%",
    flexDirection: "row",
    marginTop: 40,
    backgroundColor: "#784aed",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 30,
  },
  registerButtonText: {
    color: "#ffffff",
    fontSize: 20,
  },
  errorText: {
    color: "red",
  },
});
