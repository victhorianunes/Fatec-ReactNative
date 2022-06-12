import { TouchableOpacity, SafeAreaView, Text, TextInput, View, StyleSheet } from "react-native";
import axios from "axios";
import React, { useState } from 'react';

export default function App() {

  const [inputCodigo, setInputCodigo] = useState('')
  const [resultado, setResultado] = useState({})

  async function pesquisar() {
    const { data } = await axios.get(`https://viacep.com.br/ws/${inputCodigo}/json/`)
    if (data) setResultado(data)
  }


  return (

    <SafeAreaView>
      <View >
        <Text style={styles.titulo}>CEP ➤ Endereço</Text>
        <View>
          <TextInput
            placeholder='Insira o CEP a ser consultado'
            keyboardType="numeric"
            value={inputCodigo}
            onChangeText={value => setInputCodigo(value)}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.botão}
            onPress={pesquisar}>

            <Text style={{textAlign: "center"}}>Pesquisar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resultado}>
        {resultado.cep && <Text>CEP: {resultado.cep}</Text>}
        {resultado.logradouro && <Text>Logradouro: {resultado.logradouro}</Text>}
        {resultado.bairro && <Text>Bairro: {resultado.bairro}</Text>}
        {resultado.localidade && <Text>Cidade: {resultado.localidade}</Text>}
        {resultado.uf && <Text>Estado: {resultado.uf }</Text>}
      </View>
      
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    margin: 30,

  },

  input: {
    width: 150,
    borderWidth: 1,
    padding: 4,
    borderRadius: 8,
    alignSelf: 'center'
  },
  resultado: {
    margin: 20,
    alignSelf: 'center'
  },

  botão: {
    backgroundColor: "#DDDDDD",
    padding: 4,
    margin:10,
    width: 100,
    borderRadius: 4,
    alignSelf: 'center'

  }
})

