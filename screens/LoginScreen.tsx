/**
 * LoginScreen es un componente de React Native que maneja el inicio de sesión de un usuario.
 *
 * @param {Props} props Las propiedades que se pasan al componente. La propiedad navigation es un objeto 'any' que se utiliza para la navegación.
 *
 * @returns {JSX.Element} El componente LoginScreen con el formulario de inicio de sesión y la lógica de navegación.
 */

import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import LoginForm from '../components/LoginForm';
import { styles } from '../style/LoginScreenStyle'

interface Props {
  navigation: any;
}

const LoginScreen: React.FC<Props> = (props: Props) => {

  /**
  * La función handleLogin se utiliza para manejar el evento de envío del formulario.
  *
  * @param {string} email El correo electrónico ingresado por el usuario.
  * @param {string} password La contraseña ingresada por el usuario.
  */

  const handleLogin = (email: string, password: string) => {
    const user = {
      email,
      password,
    }
    //// La propiedad de navegación se utiliza para navegar a la pantalla 'Product' con el correo electrónico como parámetro
    props.navigation.replace('Product', { email: email })
  };

  return (
    // Se utiliza el componente KeyboardAvoidingView para evitar que el teclado bloquee la entrada de texto en el formulario
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      {/* Se utiliza el componente LoginForm para mostrar el formulario de inicio de sesión y se pasa la función handleLogin como prop */}
      <LoginForm onLogin={handleLogin} />

    </KeyboardAvoidingView>
  );
};


export default LoginScreen;