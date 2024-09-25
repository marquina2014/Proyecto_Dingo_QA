import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Register from './Register';  // Importa el componente de registro de conductor
import Login from './Login';  // Importa el componente de login de conductor
import { styles } from './Styles';

export default function Conductor() {
  // Estado para determinar si el usuario selecciona "Login" o "Register"
  const [screen, setScreen] = useState(null); // null indica que aún no ha seleccionado
  
  return (
    <View style={styles.container}>
      {/* Pantalla de selección entre Login o Register */}
      {!screen && (
        <View>
          <Text style={styles.title}>Bienvenido Conductor</Text>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('Login')}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setScreen('Register')}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Pantalla de Login, pasa el rol "conductor" como prop */}
      {screen === 'Login' && <Login role="conductor" />}

      {/* Pantalla de Registro */}
      {screen === 'Register' && <Register />}
    </View>
  );
}
