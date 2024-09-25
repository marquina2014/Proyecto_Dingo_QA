import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';  // Importar íconos de FontAwesome
import { styles2 } from './Styles2';  // Usamos tus estilos mejorados

const CartScreen = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Función para manejar el menú desplegable
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <View style={styles2.container}>
      {/* Botón para desplegar el menú lateral */}
      <TouchableOpacity style={styles2.menuButton} onPress={handleDrawerToggle}>
        <Icon name="bars" style={styles2.icon} />
      </TouchableOpacity>

      {/* Vista del mapa */}
      <MapView
        style={styles2.mapStyle}  // Mapa con estilo completo
        initialRegion={{
          latitude: -34.6037,  // Latitud inicial
          longitude: -58.3816,  // Longitud inicial
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: -34.6037, longitude: -58.3816 }}
          title="Ubicación actual"
        />
      </MapView>

      {/* Menú lateral (desplegable) */}
      {drawerOpen && (
        <View style={styles2.drawerContainer}>
          <Text style={styles2.menuText}>Información del Usuario</Text>
          {/* Aquí puedes agregar más información del usuario */}
        </View>
      )}

      {/* Botón principal para solicitar servicio */}
      <TouchableOpacity style={styles2.goButton}>
        <Text style={styles2.goButtonText}>Solicitar Servicio</Text>
      </TouchableOpacity>

      {/* Botón que lleva al inicio */}
      <TouchableOpacity style={styles2.menuButton} onPress={() => {/* Función para ir al inicio */}}>
        <Icon name="home" style={styles2.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;