import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View, StyleSheet } from 'react-native';

export default function LogIn() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const logIn = () => {
    // here must be request to back
    Alert.alert('Credentials', `${username} + ${password}`)
  }

  return (
    <View style={styles.container}>
        <Text>Pichka!</Text>
        <TextInput
          value={username}
          onChangeText={(username) => setUsername(username)}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(password) => setPassword(password)}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={logIn()}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});