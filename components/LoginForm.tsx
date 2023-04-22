// Importing necessary modules and components
import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Logo from "./Logo";

// Importing styles from LoginFormStyle file
import { styles } from "../style/LoginFormStyle";

// Importing Alert component from react-native
import { Alert } from "react-native";

// Defining the Props interface for the LoginForm component
interface Props {
  onLogin: (email: string, password: string) => void;
}

// Defining the LoginForm component
const LoginForm = ({ onLogin }: Props) => {
  // Setting up state variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Defining a function to handle login button press
  const handleLogin = () => {
    // Checking if either email or password is not filled in, and displaying an alert if true
    if (!email || !password) {
      Alert.alert("Please fill in all fields");
      return new Error("Can't login there's not email or password");
    }
    // Calling the onLogin function passed as a prop, with the email and password as arguments
    onLogin(email, password);
  };

  return (
    <View style={styles.container}>
      {/* Rendering the Logo component */}
      <Logo />
      <View style={styles.form}>
        {/* Creating a TextInput component for email input, with custom styles */}
        <TextInput
          style={styles.input}
          testID="email-input"
          placeholder="Username"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
        />
        {/* Creating a TextInput component for password input, with custom styles */}
        <TextInput
          style={styles.input}
          testID="password-input"
          placeholder="Password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={setPassword}
          value={password}
        />
        {/* Creating a TouchableOpacity component for the login button, with custom styles and an onPress event handler */}
        <TouchableOpacity style={styles.button} testID="login-button" onPress={handleLogin}>
          {/* Adding text to the login button */}
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Exporting the LoginForm component
export default LoginForm;