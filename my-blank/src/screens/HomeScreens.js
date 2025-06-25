import {View, Text, StyleSheet, ImageBackground,SafeAreaView} from 'react-native';
import React, { useState } from 'react'; 

const HomeScreen = () => {
  return (
    
      <ImageBackground 
        source={require('C:/Users/lenovo/OneDrive/Documentos/PM193/PM193/my-blank/src/assets/paisaje.jpg')} 
        style={styles.background}
        resizeMode='cover'
      >
       <SafeAreaView style={styles.content}>
        <Text style={styles.text}>Pantalla principal</Text>
        </SafeAreaView> 
      </ImageBackground>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
  },
  text: {
    color: '#eeeeee',
    fontSize: 24,
    fontWeight: 'bold',
  }
  });