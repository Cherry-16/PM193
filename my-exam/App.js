import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Alert,
  ImageBackground,
} from 'react-native';

const TOMTOM_API_KEY = 'bMXrWEXn5Dm71VXkJXW9ufvLzG9oc7Co'; 

export default function App() {
  const [term, setTerm] = useState('');
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const searchRestaurants = async () => {
    if (!term || !city) {
      Alert.alert('Campos requeridos', 'Ingresa tipo de comida y ciudad');
      return;
    }

    setLoading(true);
    setResults([]);

    const query = `${term} ${city}`;

    try {
      const response = await fetch(
        `https://api.tomtom.com/search/2/search/${encodeURIComponent(query)}.json?key=${TOMTOM_API_KEY}&limit=10&countrySet=MX&entityType=restaurant`
      );

      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setResults(data.results);
      } else {
        Alert.alert('Sin resultados', 'No se encontraron restaurantes.');
      }
    } catch (err) {
      Alert.alert('Error', 'No se pudo obtener la información.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80' }}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>🍽️ Busca tu Restaurante Favorito</Text>

        <TextInput
          style={styles.input}
          placeholder="¿Qué se te antoja? (ej. pizza, sushi...)"
          value={term}
          onChangeText={setTerm}
          placeholderTextColor="#b97a56"
        />
        <TextInput
          style={styles.input}
          placeholder="Ciudad (ej. Guadalajara)"
          value={city}
          onChangeText={setCity}
          placeholderTextColor="#b97a56"
        />

        <View style={styles.buttonContainer}>
          <Button title="Buscar" color="#d35400" onPress={searchRestaurants} />
        </View>

        {loading && <ActivityIndicator size="large" color="#d35400" style={{ marginTop: 20 }} />}

        <ScrollView style={{ marginTop: 20 }}>
          {results.map((place, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.name}>🍴 {place.poi?.name || 'Sin nombre'}</Text>
              <Text style={styles.address}>📍 {place.address?.freeformAddress || 'Sin dirección'}</Text>
              <Text style={styles.info}>📏 Distancia: {Math.round(place.dist)} m</Text>
              <Text style={styles.info}>📞 {place.poi?.phone || 'Sin teléfono disponible'}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(235, 245, 255, 0.93)', // Azul pastel claro
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 18,
    textAlign: 'center',
    color: '#2d98da', // Azul vibrante
    letterSpacing: 1,
    fontFamily: 'serif',
    textShadowColor: '#d6eaff', // Sombra azul muy clara
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  input: {
    borderWidth: 1,
    padding: 12,
    marginBottom: 12,
    borderRadius: 20,
    backgroundColor: '#f7fbff', // Blanco azulado
    borderColor: '#a5b8d6', // Azul grisáceo
    fontSize: 16,
    color: '#2d98da',
  },
  buttonContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
  },
  card: {
    padding: 18,
    borderWidth: 1,
    borderRadius: 18,
    marginBottom: 18,
    backgroundColor: '#eaf6ff', // Azul muy claro
    borderColor: '#a5b8d6',
    shadowColor: '#2d98da',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3867d6', // Azul fuerte
  },
  address: {
    fontSize: 16,
    marginBottom: 8,
    color: '#3867d6',
  },
  info: {
    fontSize: 14,
    marginBottom: 4,
    color: '#4b6584', // Gris azulado
  },
});
