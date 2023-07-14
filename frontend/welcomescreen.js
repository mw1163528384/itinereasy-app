import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Welcome to Itinereasy</Text>
        <Text style={styles.subtitle}>Where planning made easy</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    title: {
        fontFamily: 'Calibri',
        fontSize: 60,
        fontWeight: 'bold',
        color: 'rgb(110,110,110)'
    },

    subtitle: {
        fontFamily: 'Calibri',
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'rgb(110,110,110)'
    },
  });

  export default WelcomeScreen;



  