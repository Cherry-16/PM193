/* Zona 1: Lugar de las importaciones */ 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import react, {useState} from 'react';

//componente
const Texto=({style})=>{
  const [contenido,setContenido]=useState('Hola Mundo')
  const actualizatexto=()=>{
    setContenido('Estado Modificado')
  };
  return(
    <Text style={[styles.text,style]} onPress={actualizatexto}>{contenido}</Text>
  )
} 
 /*const Boton=()=>{
  const [texto,setTexto]=useState('Presionar')
  const cambiarTexto=()=>{
    setTexto('Boton Presionado')
  };
  return(
    <Button title={texto} onPress={cambiarTexto}></Button>
  )}  */
/* Zona 2: Main */ 
export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.azul}>Hola</Texto>
      <Texto style={styles.verde}>Mundo</Texto>
      <Texto style={styles.negro}>React Native</Texto>
      {/*<Boton></Boton>*/}
      <StatusBar style="auto" />
    </View>
  );
}
/* Zona 3: Estilos */ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'strech',
    justifyContent: 'center',
  },
  text:{ 
    color: 'white',
    fontsize: 27, 
  }, 
  azul:{ backgroundColor:'blue'},
  verde:{backgroundColor:'green'},
  negro:{backgroundColor:'black'}

});
