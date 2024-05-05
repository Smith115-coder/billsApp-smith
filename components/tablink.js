import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function TabLink(props) {
  //   const [active, setActive] = useState(false);
  const router = useRouter();

  const toRoute = () => {
    router.replace(props.href);
  };

  //   useEffect(() => {
  //     setActive(props.active);
  //   }, []);

  return (
    <TouchableOpacity onPress={toRoute} style={styles.container}>
      <Entypo
        name={props.icon}
        size={25}
        style={[styles.icon, props.active ? styles.pressed : styles.notPressed]}
      />
      <Text
        style={[styles.text, props.active ? styles.pressed : styles.notPressed]}
      >
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
    fontWeight: "400",
  },
  notPressed: {
    color: "#ffffff",
  },
  pressed: {
    color: "#8b8c8d",
  },
});
