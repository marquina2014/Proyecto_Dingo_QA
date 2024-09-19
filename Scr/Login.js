import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  // Estado para seleccionar el tipo de login (conductor o comercio)
  const [role, setRole] = useState('conductor'); // Valores posibles: 'conductor' o 'comercio'
  
  // Estado para almacenar las credenciales de usuario
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation();

  // Datos de ejemplo para usuarios conductores y comercios
  const userConductor = { username: 'Conductor1', password: '123' };
  const userComercio = { username: 'Comercio1', password: '456' };

  // Función que maneja el inicio de sesión
  const handleLogin = () => {
    // Verifica las credenciales según el rol seleccionado
    if (role === 'conductor') {
      if (username === userConductor.username && password === userConductor.password) {
        navigation.navigate('MenuConductor'); // Navega al menú de conductor
      } else {
        alert('Credenciales incorrectas para conductor');
      }
    } else if (role === 'comercio') {
      if (username === userComercio.username && password === userComercio.password) {
        navigation.navigate('MenuComercio'); // Navega al menú de comercio
      } else {
        alert('Credenciales incorrectas para comercio');
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Botones para seleccionar entre Conductor o Comercio */}
      

      {/* Formulario de inicio de sesión */}
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