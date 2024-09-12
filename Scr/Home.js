import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles';
export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio del proyecto</Text>

      {/* Botón para ir al Login */}
      <TouchableOpacity
        style={{
          height: 40,
          padding: 10,
          backgroundColor: '#03A9F4',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 2,
          marginBottom: 10,
        }}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Botón para ir al Registro */}
      <TouchableOpacity
        style={{
          height: 40,
          padding: 10,
          backgroundColor: '#03A9F4',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 2,
        }}
        onPress={() => navigation.navigate('Registro')}
      >
        <Text style={styles.buttonText}>Registro</Text>
      </TouchableOpacity>

    </View>
  );
}