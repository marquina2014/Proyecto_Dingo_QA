import { Dimensions } from 'react-native';
import appConfig from '../app.json';  // Importar app.json

const colors = appConfig.expo.colors;

export const styles2 = {
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
  menuButton: {
    position: 'absolute',
    top: 20,
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
  },
  icon: {
    fontSize: 24,
    color: '#fff',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  selectedContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -100 }, { translateY: -100 }],
    backgroundColor: colors.background,
    padding: 20,
    borderRadius: 10,
  },
  selectedText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  goButton: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: 10,
  },
  goButtonText: {
    fontSize: 18,
    color: '#fff',
  },
};