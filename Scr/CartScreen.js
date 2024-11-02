import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles2 } from './Styles2';

const CartScreen = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <View style={styles2.container}>
      
      {/* Botón para desplegar el menú */}
      <TouchableOpacity style={styles2.menuButton} onPress={handleDrawerToggle}>
        <Icon name="bars" style={styles2.icon} />
      </TouchableOpacity>

      {/* Superposición con fondo oscuro cuando el menú está abierto */}
      {drawerOpen && <View style={styles2.overlay} />}

      {/* Contenedor del mapa con botón dentro */}
      <View style={styles2.mapContainer}>
        <MapView
          style={styles2.mapStyle}
          initialRegion={{
            latitude: 10.49015517438719,
            longitude: -66.85445503425669,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 10.49015517438719, longitude: -66.85445503425669 }}
            title="Ubicación actual"
          />
        </MapView>

        {/* Botón principal para solicitar servicio dentro del cuadro del mapa */}
        <TouchableOpacity style={styles2.goButton}>
          <Text style={styles2.goButtonText}>Solicitar Servicio</Text>
        </TouchableOpacity>
      </View>

      {/* Botón de inicio (home) */}
      <TouchableOpacity style={[styles2.menuButton, styles2.homeButton]} onPress={() => { /* Navegación */ }}>
        <Icon name="home" style={styles2.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default CartScreen;
