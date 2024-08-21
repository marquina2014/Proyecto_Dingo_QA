import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

export default function Home({ navigation }) {
  return (
<View style={styles.container}>
      <Text style={styles.title}>Inicio del proyecto</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Registro')}
        >
          <Text style={styles.buttonText}>Registro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}