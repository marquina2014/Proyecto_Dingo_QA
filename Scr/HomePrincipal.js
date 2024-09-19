import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './Styles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seleccione una opción</Text>

      {/* Opción Conductor */}
      <TouchableOpacity
        style={styles.choiceButton}
        onPress={() => navigation.navigate('Conductor')}
      >
        <Image
          source={require('../assets/Icon_Driver.png')} // Ruta a la imagen del conductor
          style={styles.icon}
        />
        <Text style={styles.choiceText}>Conductor</Text>
      </TouchableOpacity>

      {/* Opción Comercio */}
      <TouchableOpacity
        style={styles.choiceButton}
        onPress={() => navigation.navigate('Comercio')}
      >
        <Image
          source={require('../assets/Icon_Company.png')} // Ruta a la imagen del comercio
          style={styles.icon}
        />
        <Text style={styles.choiceText}>Comercio</Text>
      </TouchableOpacity>
    </View>
  );
}