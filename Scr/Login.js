import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Styles';
import CartScreen from './CartScreen';  // Importar la pantalla de destino (CartScreen)

export default function Login({ role }) {
  // Estados para almacenar las credenciales de usuario y si el login fue exitoso
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Estado para manejar si el usuario está logueado

  // Datos de ejemplo para usuarios conductores y comercios
  const userConductor = { username: 'Luis', password: '123' };
  const userComercio = { username: 'rafael', password: '123' };

  // Función que maneja el inicio de sesión
  const handleLogin = () => {
    // Verifica las credenciales según el rol seleccionado
    if (role === 'conductor') {
      if (username === userConductor.username && password === userConductor.password) {
        setIsLoggedIn(true);  // Cambia el estado a "logueado"
      } else {
        alert('Credenciales incorrectas para conductor');
      }
    } else if (role === 'comercio') {
      if (username === userComercio.username && password === userComercio.password) {
        setIsLoggedIn(true);  // Cambia el estado a "logueado"
      } else {
        alert('Credenciales incorrectas para comercio');
      }
    }
  };

  // Si el usuario está logueado, renderiza CartScreen
  if (isLoggedIn) {
    return <CartScreen />;  // Muestra la pantalla de CartScreen si el login fue exitoso
  }

  // Si no está logueado, muestra el formulario de login
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión {role === 'conductor' ? 'Conductor' : 'Comercio'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
