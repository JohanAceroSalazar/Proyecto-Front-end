import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm({
      ...form,
      [field]: value
    });
  };

  const handleRegister = () => {
    const emailRegex = /\S+@\S+\.\S+/;

    if (!form.name || !form.email || !form.password) {
      setMessage("Todos los campos son obligatorios");
      return;
    }

    if (!emailRegex.test(form.email)) {
      setMessage("Correo inválido");
      return;
    }

    setMessage("Registro exitoso");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>ONE{"\n"}LANGUAGE </Text>

      <Text style={styles.title}>Crea tu cuenta</Text>

      <View style={styles.card}>
        <Text>Nombre completo</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={(text) => handleChange("name", text)}
        />

        <Text>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="johan@gmail.com"
          onChangeText={(text) => handleChange("email", text)}
        />

        <Text>Contraseña</Text>

      <View style={styles.passwordField}>
        <TextInput
          style={styles.inputPassword}
          placeholder="********"
          secureTextEntry={!showPassword}
          onChangeText={(text) => handleChange("password", text)}
        />

        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowPassword(!showPassword)}
        >
        <Ionicons
          name={showPassword ? "eye-off" : "eye"}
          size={20}
          color="#555"
        />
        </TouchableOpacity>
      </View>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.link}>Ya tienes una cuenta? Inicia sesión</Text>
      <Text style={styles.terms}>Acepto los términos y condiciones</Text>

      <Text style={{ marginTop: 10 }}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  // Contenedor principal (pantalla completa)
  container: {
    flex: 1, // ocupa toda la pantalla
    backgroundColor: "#3A78C2",
    alignItems: "center", // centra horizontal
    justifyContent: "flex-start", // centra vertical
    paddingTop: 70, // espacio arriba (por el logo)
    paddingHorizontal: 16, // espacio lateral
  },

  // Logo en esquina superior izquierda
  logo: {
    position: "absolute", // se posiciona libremente
    top: 30,
    left: 25,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    lineHeight: 22,
  },

  // Título principal
  title: {
    marginBottom: 16,
    fontSize: 35,
    color: "white",
    textAlign: "center",
    marginTop: 70,
  },

  // Tarjeta blanca del formulario
  card: {
    width: "100%",
    maxWidth: 330,
    minHeight: 420, // 👈 hace la tarjeta más larga
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    marginTop: 60,
  },

  

  // Inputs normales
  input: {
    width: "100%",
    marginBottom: 25,
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000000",
    fontSize: 14,
    color: "#2c2929",
  },

  // Contenedor del input de contraseña + icono
  passwordField: {
    position: "relative", // permite posicionar el icono encima
    justifyContent: "center",
    marginBottom: 30,
  },

  // Input de contraseña (con espacio para el icono)
  inputPassword: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 12,
    paddingRight: 40, // deja espacio al icono
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
  },

  // Icono del ojo (mostrar/ocultar contraseña)
  icon: {
    position: "absolute",
    right: 12,
  },

  // Botón principal
  button: {
    width: "100%",
    marginTop: 8,
    backgroundColor: "#F4DC2E",
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    borderRadius: 12,
    alignItems: "center", // centra el texto dentro
  },

  // Texto del botón
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  // Texto de login debajo del formulario
  loginText: {
    marginTop: 50,
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },

  // Link (ej: Login)
  link: {
    color: "#FFFFFF",
    marginTop: 40,
    textDecorationLine: "underline",
  },

  // Términos y condiciones
  terms: {
    marginTop: 20,
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },

  // Mensaje final
  message: {
    marginTop: 6,
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
});