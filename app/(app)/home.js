import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
import { useRouter } from "expo-router";
import { getTotalBalance } from "../../services/DataService";

export default function Home() {
  const { user, email } = useContext(AuthContext);
  const [amount, setAmount] = useState();
  const [incomes, setIncomces] = useState();
  const [bills, setBills] = useState();
  const router = useRouter();

  if (user === undefined) router.replace("/login");

  async function handleGetUserData() {
    await getTotalBalance().then((response) => {
      setAmount(response.data.total);
      setIncomces(response.data.incomes);
      setBills(response.data.bills);
    });
  }

  useEffect(() => {
    handleGetUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.user}>{user ? user : "Cargando..."}</Text>
      <Text style={styles.title}>General balance</Text>
      <View style={styles.generalBalanceCard}>
        <Text style={styles.cardText}>Total Amount</Text>
        <Text style={styles.cardNumber}>${amount}</Text>
      </View>
      <View style={styles.generalIncomesCard}>
        <Text style={styles.cardText}>Total incomes</Text>
        <Text style={styles.cardNumber}>$ {incomes}</Text>
      </View>
      <View style={styles.generalIncomesCard}>
        <Text style={styles.cardText}>Total bills</Text>
        <Text style={styles.cardNumber}>$ {bills}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f0f2f5",
  },
  user: {
    fontSize: 24,
    fontWeight: "400",
    color: "#1a1a1a",
  },
  title: {
    fontSize: 32,
    fontWeight: "500",
    color: "#1a1a1a",
  },
  generalBalanceCard: {
    backgroundColor: "#005eb8",
    height: 220,
    width: 250,
    borderRadius: 15,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "75%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    color: "#ffffff",
    fontSize: 24,
  },
  cardNumber: {
    color: "#ffffff",
    fontSize: 48,
  },
  generalIncomesCard: {
    borderColor: "#005eb8",
    borderWidth: 2,
    height: 130,
    width: "90%",
    borderRadius: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: "center",
    maxWidth: "90%",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  generalIncomesText: {
    color: "#1a1a1a",
    fontSize: 24,
  },
});
