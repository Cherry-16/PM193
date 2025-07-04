import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('C:/Users/lenovo/OneDrive/Documentos/PM193/PM193/my-blank/src/assets/tigre.jpg')}
                style={styles.logo}
                resizeMode="contain"
            />
            <Text style={styles.title}>Bienvenido a la App</Text>
            
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
   container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222831',
    },
    logo: {
        width: 200,
        height: 200,
       
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#eeeeee',
    },

})