import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Logo from "./Logo";
import { styles } from "../style/LoginFormStyle";
import { Alert } from "react-native";

interface Props {
  onLogin: (email: string, password: string) => void;
}

const LoginForm = ({ onLogin }: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Please fill in all fields");
      return new Error("Can't login there's not email or password");
    }
    onLogin(email, password);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          testID="email-input"
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          testID="password-input"
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={setPassword}
          value={password}
        />
        <TouchableOpacity style={styles.button} testID="login-button" onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginForm;