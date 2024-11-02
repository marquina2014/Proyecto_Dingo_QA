import { Dimensions } from 'react-native';
import appConfig from '../app.json';

const colors = appConfig.expo.colors;
const { width, height } = Dimensions.get('window');

export const styles2 = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
    borderColor: '#FF6347', // Rojo tomate
    borderWidth: 2,
  },
  drawerContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: width*0.75,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 10,
    borderColor: '#4682B4', // Azul acero
    borderWidth: 2,
  },
  menuButton: {
    position: 'center',
    top: 40,
    left: 0,
    width: 300,
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
    zIndex: 10,
    borderColor: '#FFA500', // Naranja
    borderWidth: 2,
  },
  homeButton: {
    top: 100,
    borderColor: '#9370DB', // Púrpura medio
    borderWidth: 2,
  },
  icon: {
    fontSize: 24,
    color: '#fff',
    borderColor: '#FF1493', // Rosa profundo
    borderWidth: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 9,
    borderColor: '#696969', // Gris oscuro
    borderWidth: 2,
  },
  mapContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 100,
    paddingBottom: 70, 
    justifyContent: 'center',
    borderColor: '#00FA9A', // Verde menta
    borderWidth: 2,
  },
  mapStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderColor: '#B0E0E6', // Azul pálido
    borderWidth: 1,
  },
  goButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
    borderColor: '#FFD700', // Dorado
    borderWidth: 2,
  },
  goButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    borderColor: '#8A2BE2', // Azul violeta
    borderWidth: 1,
  },
};
