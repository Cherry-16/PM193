import {
  ScrollView, // Para hacer el contenido desplazable
  StatusBar, // Para acceder a la altura de la barra de estado
  StyleSheet, // Para crear estilos
  Text
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
                    Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
          Este es el texto que ocupara todo el espacio 
          para que podamos ver el espacio que ocupe el scrollView.
        </Text>
      </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,                             
    paddingTop: StatusBar.currentHeight 
  },
  scrollView: {
    backgroundColor: 'green',            
  },
  text: {
    fontSize: 42,                        
    padding: 12,                        
  },
});

export default App;