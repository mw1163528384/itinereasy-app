import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const GetStartedScreen = () => {
    return (
        <View style={styles.container}>
        <Text style={styles.title}>New Trip!</Text>
        <Text style={styles.subtitle}>
          Fill in your trip details and preferences so that we can generate an Itinerary for you using AI!
          </Text>
        <Text style={styles.buttonText}>Start!</Text>
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
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },

    subtitle: {
        fontFamily: 'Calibri',
        fontSize: 10,
        color: 'black',
        marginTop: 10,
        marginBottom: 10
    },

    buttonText: {
      fontFamily: 'Calibri',
      fontSize: 10,
      color: 'white',
      backgroundColor: 'rgb(255,168,0)',
      marginTop: 100,
      marginBottom: 10,
      width: 100,
      textAlign: 'center',
      borderRadius: 10
    },
  });

  export default GetStartedScreen;



  