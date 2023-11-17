import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default () => {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const mostrarLoginSenha = () => console.warn(email, senha);

  return (
    <View>
      <TextInput
        keyboardType='email-address'
        placeholder='Email'
        value={email}
        onChangeText={email => setEmail(email)}
      />
      <TextInput
        secureTextEntry
        placeholder='Senha'
        value={senha}
        onChangeText={senha => setSenha(senha)}
      />
      <Button title="Login" onPress={mostrarLoginSenha()} color={"#008000"}/>
    </View>
  )
}