import { TouchableOpacity, SafeAreaView, Text, TextInput, View, StyleSheet, Image } from "react-native";
import axios from "axios";
import React, { useState } from 'react';

export default function App() {

  const [inputLogin, setInputLogin] = useState('')
  const [resultado, setResultado] = useState({})

  async function pesquisar() {
    const { data } = await axios.get(`https://api.github.com/users/${inputLogin}`)
    if (data) setResultado(data)
  }


  return (

    <SafeAreaView>
      <View >
        <Text style={styles.titulo}>Perfil dos Devs</Text>
        <View>
          <TextInput
            placeholder='Digite o login do Github'
            value={inputLogin}
            onChangeText={value => setInputLogin(value)}
            style={styles.input}
          />
          <TouchableOpacity
            style={styles.botão}
            onPress={pesquisar}>

            <Text style={{textAlign: "center"}}>Pesquisar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resultado}>
        <Image
          source={{ uri: resultado.avatar_url}}
          style={styles.img}
        />
                   <View>
            {resultado.id && <Text>Id: {resultado.id}</Text>}
            {resultado.name && <Text>Nome: {resultado.name}</Text>}
            {resultado.public_repos && (
              <Text>Repositórios: {resultado.public_repos}</Text>
            )}
            {resultado.created_at && (
              <Text>Criado em: {resultado.created_at}</Text>
            )}
            {resultado.followers && (
              <Text>Seguidores: {resultado.followers}</Text>
            )}
            {resultado.following && (
              <Text>Seguindo: {resultado.following}</Text>
            )}
          </View>
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
    width: 200,
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

  },

  img: {
    width: 150,
    height: 150,
    borderRadius:100
  }
})

