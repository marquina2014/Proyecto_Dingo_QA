import { Dimensions } from 'react-native';
import appConfig from '../app.json';  // Importar app.json

const colors = appConfig.expo.colors;
const { width, height } = Dimensions.get('window');  // Obtener dimensiones de la pantalla

export const styles2 = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  // Menú lateral (drawer)
  drawerContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: width * 0.75,  // Ocupa el 75% de la pantalla
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingVertical: 40,
    zIndex: 10,  // Colocarlo encima del mapa
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },
  menuItem: {
    width: '100%',
    paddingVertical: 15,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.text,
  },
  menuText: {
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold',
  },
  // Opciones de usuario (en la parte inferior)
  opcionesContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  opcion: {
    width: '100%',
    paddingVertical: 15,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.background,
  },
  opcionText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // Botón de menú (hamburguesa)
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 50,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 10,  // Asegura que esté encima del mapa
  },
  icon: {
    fontSize: 24,
    color: '#fff',
  },
  // Estilo del overlay (superposición)
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 9,
  },
  // Contenedor para mostrar cuando se selecciona una opción
  selectedContainer: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: [{ translateX: -width * 0.4 }, { translateY: -height * 0.1 }],
    backgroundColor: colors.background,
    width: width * 0.8,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 10,
  },
  selectedText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
    textAlign: 'center',
  },
  goButton: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  goButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  // Estilo específico para el mapa, ocupa toda la pantalla disponible
  mapStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
};
