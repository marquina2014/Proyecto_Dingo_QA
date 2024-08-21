import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderColor: '#ffff',
    
    
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    
  },
  buttonContainer: {
    width: '40%',
    marginTop: 10,
    marginBottom: 10,
    
  },
  button: {
    height: 40,
    padding: 10,
    backgroundColor: '#0288D1',
    borderRadius: 8,
    alignItems: 'center',
    
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});