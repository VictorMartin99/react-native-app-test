import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import LoginForm from '../components/LoginForm';

// Importing styles from LoginScreenStyle file
import { styles } from '../style/LoginScreenStyle'

// Declare the Props interface
interface Props {
  navigation: any;
}

// Declare the LoginScreen functional component with Props as its parameter
const LoginScreen: React.FC<Props> = (props: Props) => {

  // Declare the handleLogin function that takes in email and password as parameters
  const handleLogin = (email: string, password: string) => {
    // Create a user object with email and password properties
    const user = {
      email,
      password,
    }

    // Navigate to the Product screen and pass the email as a parameter using navigation.replace()
    props.navigation.replace('Product', { email: email })
  };

  // Render the KeyboardAvoidingView container with the LoginForm component
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <LoginForm onLogin={handleLogin} />
    </KeyboardAvoidingView>
  );
};

// Export the LoginScreen component as the default export
export default LoginScreen;