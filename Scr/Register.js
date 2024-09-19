import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './Styles';

export default function Register() {
  // Estado para seleccionar el tipo de registro (conductor o comercio)
  const [role, setRole] = useState('conductor'); // Valores posibles: 'conductor' o 'comercio'

  // Función que renderiza el formulario de registro de conductor
  const renderConductorForm = () => (
    <View>
      <Text style={styles.title}>Registro Conductor</Text>
      <TextInput style={styles.input} placeholder="Correo electrónico" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />


      
      <TextInput style={styles.input} placeholder="Numero Telefono" secureTextEntry={true} />
      <TextInput style={styles.input} placeholder="Nombre de usuario" />
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // Función que renderiza el formulario de registro de comercio
  const renderComercioForm = () => (
    <View>
      <Text style={styles.title}>Registro Comercio</Text>
      <TextInput style={styles.input} placeholder="Nombre de usuario" />
      <TextInput style={styles.input} placeholder="Correo electrónico" />
      <TextInput style={styles.input} placeholder="Nombre del comercio" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry={true} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Botones para seleccionar entre Conductor o Comercio */}
      

      {/* Renderiza el formulario basado en la selección */}
      {role === 'conductor' ? renderConductorForm() : renderComercioForm()}
    </View>
  );
}