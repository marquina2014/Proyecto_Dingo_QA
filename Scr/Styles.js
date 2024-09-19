import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#394DBF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderColor: '#fff',
    borderRadius: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonContainer: {
    width: '40%',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  button: {
    height: 40,
    padding: 10,
    backgroundColor: '#03A9F4',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#FFFFFFFF',
    textTransform: 'uppercase',
  },
  
  // Estilo para los botones de elección (choices)
  choiceButton: {
    width: 150,               // Ancho del botón
    height: 150,              // Alto del botón, cuadrado
    backgroundColor: '#21A675', // Fondo azul
    borderColor: '#FFFFFFF' ,        // Bordes redondeados
    justifyContent: 'center', // Centrar contenido verticalmente
    alignItems: 'center',     // Centrar contenido horizontalmente
    marginBottom: 20,         // Separación inferior entre botones
    shadowColor: '#000',      // Sombras del botón
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    borderRadius: 50,             // Sombra en Android
  },

  // Estilo para el texto dentro de los botones de elección (choices)
  choiceText: {
    fontSize: 18,             // Tamaño de la fuente del texto
    color: '#fff',            // Color blanco del texto
    fontWeight: 'bold',       // Negrita
  },

  // Estilo para los iconos dentro de los botones de elección (choices)
  icon: {
    width: 60,  // Ajusta el tamaño del icono según sea necesario
    height: 60, // Ajusta el tamaño del icono según sea necesario
    marginBottom: 10, // Espacio entre el icono y el texto
  },
});