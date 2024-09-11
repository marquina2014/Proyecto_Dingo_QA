import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import { colors } from '../app.json';

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

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: colors.background,
    width: Dimensions.get('window').width * 0.8,
    paddingHorizontal: 10,
  },
  menuItem: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.text,
  },
  menuText: {
    fontSize: 18,
    color: colors.text,
  },
  opcionesContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background,
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: colors.text,
  },
  opcion: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.text,
  },
  opcionText: {
    fontSize: 18,
    color: colors.text,
  },
};

const MenuItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const Opcion = ({ item }) => {
  return (
    <TouchableOpacity style={styles.opcion}>
      <Text style={styles.opcionText}>{item.name}</Text>
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
    <View style={styles.container}>
      <TouchableOpacity style={{ position: 'absolute', top: 10, left: 10, zIndex: 1 }} onPress={handleDrawerToggle}>
      <Image source={require('./assets/icon.png')} />
      </TouchableOpacity>
      {drawerOpen && (
        <View style={styles.drawerContainer}>
          <FlatList
            data={menuItems}
            renderItem={({ item }) => <MenuItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
          <View style={styles.opcionesContainer}>
            <FlatList
              data={opciones}
              renderItem={({ item }) => (
                <Opcion item={item} onPress={() => handleSelect(item)} />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      )}
      {selected && (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ position: 'absolute', top: '50%', left: '50%', transform: [{ translateX: -100 }, { translateY: -100 }], backgroundColor: colors.background, padding: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', color: colors.text }}>{selected.name}</Text>
            <Text style={{ fontSize: 18, color: colors.text }}>Opciones:</Text>
            <TouchableOpacity style={{ width: '100%', height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.primary, borderRadius: 5 }}>
              <Text style={{ fontSize: 18, color: '#fff' }}>Ir a {selected.name}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default MenuScreen;