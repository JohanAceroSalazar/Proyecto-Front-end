import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();
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

        <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
          <Text style={styles.link}>
          ¿Ya tienes una cuenta?{" "}
          <Text style={{ fontWeight: "bold", textDecorationLine: "underline", color: "white" }}>
          Inicia sesión
          </Text>
          </Text>
          </TouchableOpacity>

      <Text style={styles.terms}>Acepto los términos y condiciones</Text>

      {!!message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3A78C2",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 70,
    paddingHorizontal: 16,
  },
  logo: {
    position: "absolute",
    top: 30,
    left: 25,
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    lineHeight: 22,
  },
  title: {
    marginBottom: 16,
    fontSize: 35,
    color: "white",
    textAlign: "center",
    marginTop: 70,
  },
  card: {
    width: "100%",
    maxWidth: 330,
    minHeight: 420,
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 15,
    marginTop: 60,
  },
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
  passwordField: {
    position: "relative",
    justifyContent: "center",
    marginBottom: 30,
  },
  inputPassword: {
    width: "100%",
    backgroundColor: "white",
    paddingVertical: 14,
    paddingHorizontal: 12,
    paddingRight: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#000",
  },
  icon: {
    position: "absolute",
    right: 12,
  },
  button: {
    width: "100%",
    marginTop: 8,
    backgroundColor: "#F4DC2E",
    borderWidth: 2,
    borderColor: "black",
    padding: 10,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  link: {
    color: "#FFFFFF",
    marginTop: 40,
    
    
  },
  terms: {
    marginTop: 20,
    fontSize: 15,
    color: "white",
    textAlign: "center",
  },
  message: {
    marginTop: 10,
    fontSize: 14,
    color: "white",
    textAlign: "center",
  },
});