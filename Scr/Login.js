import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

export default function Login() {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <TextInput style={styles.input} placeholder="Nombre de usuario" />
    <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}