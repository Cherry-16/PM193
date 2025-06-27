import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/fondo_1.jpeg')}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>Bienvenido a la App</Text>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
});
