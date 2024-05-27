import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
export default function Bills() {

  async function getBills() {


  const [bil]

    await axios.get("http://192.168.31.239:8000/api/v1/bills", {
      headers:{
        Accept: "application/vnd.api+json",
      },
    }).then((response) => {
      console.log(response.data)
    });
  }

  useEffect(() =>{
    getBills()
  },[])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bills</Text>
      {/* <View style={styles.main}></View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 20,
    color: "#38434D",
  },
});
