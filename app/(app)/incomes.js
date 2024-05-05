import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Incomes() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.log(error))
  //     .finally(() => setloading(false));
  // });

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Incomes</Text>
        {/* <ScrollView>
          {loading ? (
            <Text>Cargando...</Text>
          ) : (
            data.map((post) => (
              <View key={post.id}>
                <Text style={styles.text}>{post.title}</Text>
                <Text style={styles.text}>{post.body}</Text>
              </View>
            ))
          )}
        </ScrollView> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  text: {
    color: "white",
  },
});
