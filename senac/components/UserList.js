import { Text, View, Pressable, StyleSheet } from "react-native";
import { useState } from "react";

export default function UserList() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  return (
    <View>
      <Text style={{ textAlign: "center" }}>UserList</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? "darkgreen" : "green",
            textShadow: pressed ? "1px 1px 2px rgba(0, 0, 0, 0.2)" : "none",
          },
        ]}
        onPress={incrementar}
      >
        <Text style={[styles.buttonText]}>Incrementar +</Text>
      </Pressable>
      <Text style={styles.counter}>{contador}</Text>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            backgroundColor: pressed ? "darkred" : "red",
            textShadow: pressed ? "1px 1px 2px rgba(0, 0, 0, 0.2)" : "none",
          },
        ]}
        onPress={decrementar}
      >
        <Text style={[styles.buttonText]}>Decrementar -</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    paddingBottom: 30,
    fontSize: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  counter: {
    fontSize: 30,
    textAlign: "center",
  },
});
