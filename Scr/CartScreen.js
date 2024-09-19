import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';  // Importar íconos de FontAwesome
import { styles2 } from './Styles2.js';  // Importar los estilos desde styles2

const menuItems = [
  { id: 1, name: 'Inicio', icon: 'home' },
  { id: 2, name: 'Categorías', icon: 'list' },
  { id: 3, name: 'Carrito', icon: 'shopping-cart' },
  { id: 4, name: 'Perfil', icon: 'user' },
];

const opciones = [
  { id: 1, name: 'Ajustes', icon: 'cog' },
  { id: 2, name: 'Ayuda', icon: 'question-circle' },
  { id: 3, name: 'Cerrar sesión', icon: 'sign-out-alt' },
];

const MenuItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles2.menuItem}>
      <Text style={styles2.menuText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const Opcion = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles2.opcion} onPress={onPress}>
      <Text style={styles2.opcionText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const MenuScreen = () => {
  const [selected, setSelected] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSelect = (item) => {
    setSelected(item);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <View style={styles2.container}>
      <TouchableOpacity style={styles2.menuButton} onPress={handleDrawerToggle}>
        <Icon name="bars" style={styles2.icon} />  {/* Icono de menú */}
      </TouchableOpacity>

      {drawerOpen && (
        <View style={styles2.drawerContainer}>
          <FlatList
            data={menuItems}
            renderItem={({ item }) => <MenuItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
          <View style={styles2.opcionesContainer}>
            <FlatList
              data={opciones}
              renderItem={({ item }) => (
                <Opcion
                  item={item}
                  onPress={() => handleSelect(item)}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      )}

      {selected && (
        <View
          style={styles2.overlay}
        >
          <View style={styles2.selectedContainer}>
            <Text style={styles2.selectedText}>
              {selected.name}
            </Text>
            <TouchableOpacity style={styles2.goButton}>
              <Text style={styles2.goButtonText}>Ir a {selected.name}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default MenuScreen;