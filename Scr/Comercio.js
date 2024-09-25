import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Register from './Register';  // Importa el componente de registro de comercio
import Login from './Login';  // Importa el componente de login de comercio
import { styles } from './Styles';

export default function Comercio() {
  // Estado para determinar si el usuario selecciona "Login" o "Register"
  const [screen, setScreen] = useState(null); // null indica que aún no ha seleccionado
  
  return (
    <View style={styles.container}>
      {/* Pantalla de selección entre Login o Register */}
      {!screen && (
        <View>
          <Text style={styles.title}>Bienvenido Comercio</Text>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('Login')}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('Register')}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Pantalla de Login, pasa el rol "comercio" como prop */}
      {screen === 'Login' && <Login role="comercio" />}

      {/* Pantalla de Registro */}
      {screen === 'Register' && <Register />}
    </View>
  );
}