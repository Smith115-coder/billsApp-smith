import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import axios from "axios";

export default function Bills() {
  const [bills, setBills] = useState([]);

  async function getBills() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/v1/api.php/", {
        headers: {
          Accept: "application/vnd.api+json",
        },
      });
      setBills(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching bills:', error);
      Alert.alert('Error', 'Network Error: Unable to fetch bills');
    }
  }

  useEffect(() => {
    getBills();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gastos</Text>
        {bills.map((bill) => (
          <View style={styles.billItem} key={bill.id}>
            <Text style={styles.billTitle}>{bill.attributes.title}</Text>
            <Text style={styles.billAmount}>{bill.attributes.amount}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f0f2f5",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  billItem: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  billTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  billAmount: {
    fontSize: 18,
  },
});
