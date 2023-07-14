import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle authentication logic here
  };

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <TextInput
          label="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.usernameInput}
          theme={theme}
        />
        <TextInput
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
          style={styles.passwordInput}
          theme={theme}
        />
        <Button mode="contained" onPress={handleLogin} style={styles.button} theme={theme}>
          Login
        </Button>
      </View>
    </PaperProvider>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(110,110,110)', // Change the primary color of the button
    text: 'white', // Change the text color of the username and password fields
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  usernameInput: {
    marginBottom: 12,
    backgroundColor: 'rgb(217,217,217)',
    color: 'black'
  },
  passwordInput: {
    marginBottom: 12,
    backgroundColor: 'rgb(217,217,217)',
    color: 'black'
  },
  button: {
    marginTop: 24,
    backgroundColor: 'black',
    color: 'white',
  },
});

export default LoginScreen;
