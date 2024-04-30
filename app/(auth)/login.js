import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

export default function Page() {
  const user = true;

  if(user){
    return (<Redirect href="/bills" />);
  }

  return (
    <View>
      <Text style={styles.text}>Login</Text>
      <Text style={styles.text}>Esto es el login</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: "#ffffff",
  },
});
