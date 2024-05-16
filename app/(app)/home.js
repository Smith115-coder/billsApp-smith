import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { AuthContext, useAuthContext } from "../../contexts/AuthContext";
// import { setToken } from "../../services/TokenService";
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
  },
  user: {
    fontSize: 24,
    fontWeight: "400",
    color: "#ffffff",
  },
  title: {
    fontSize: 32,
    fontWeight: "500",
    color: "#ffffff",
  },
  generalBalanceCard: {
    backgroundColor: "#784aed",
    height: 220,
    width: 250,
    borderRadius: 30,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "75%",
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
    borderColor: "#784aed",
    borderWidth: 2,
    height: 130,
    width: "90%",
    borderRadius: 30,
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: "center",
    maxWidth: "90%",
  },
});
