import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export const HomeScreen = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    // Aquí podrías realizar cualquier acción adicional con el nombre, como guardarlo en el estado global de la aplicación.
    alert(`¡Hola, ${name || "usuario"}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Inicio</Text>
      <Text style={styles.welcomeText}>¡Bienvenido!</Text>
      <TextInput
        placeholder="Ingresa tu nombre"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F9F7F7",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
  input: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
