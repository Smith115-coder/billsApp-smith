import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLink(props) {
  const router = useRouter();

  const toRoute = () => {
    router.replace(props.href);
  };

  return (
    <TouchableOpacity
      onPress={toRoute}
      style={[
        styles.container,
        props.active ? styles.tabPressed : styles.tabNotPressed,
      ]}
    >
      <MaterialCommunityIcons
        name={props.icon}
        size={32}
        style={[styles.text, props.active && styles.textPressed]}
      />
      <Text style={[styles.text, props.active && styles.textPressed]}>
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "#ffffff",
    fontWeight: "400",
  },
  textPressed: {
    color: "#784aed",
  },
  tabNotPressed: {
    color: "#ffffff",
  },
  tabPressed: {
    backgroundColor: "#ffffff",
    color: "#784aed",
    borderRadius: 40,
    paddingVertical: 10,
  },
});
