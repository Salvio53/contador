import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Contador: {count}</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={handleDecrement}
          style={styles.decrementButton}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleIncrement}
          style={styles.incrementButton}
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
    backgroundColor: "#FFD9E6", // Color de fondo pastel
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#333", // Color de texto
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonText: {
    color: "#fff", // Color del texto de los botones
    fontWeight: "600",
    fontSize: 24,
  },
  incrementButton: {
    backgroundColor: "#66CCCC", // Color del botón de incremento
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  decrementButton: {
    backgroundColor: "#FFA07A", // Color del botón de decremento
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
