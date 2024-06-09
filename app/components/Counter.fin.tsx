import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Contador: {count}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={handleDecrement}
          style={[styles.button, styles.decrementButton]}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleIncrement}
          style={[styles.button, styles.incrementButton]}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5", // Color de fondo
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  counterText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Color del texto del contador
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#fff", // Color del texto de los botones
    fontSize: 24,
    fontWeight: "bold",
  },
  incrementButton: {
    backgroundColor: "#66CCCC", // Color del botón de incremento
  },
  decrementButton: {
    backgroundColor: "#FFA07A", // Color del botón de decremento
  },
});
