import React, { Component, useState } from 'react';
import { View, Text, Image, SafeAreaView, StatusBar, ScrollView, Pressable, TextInput } from 'react-native';
import { styles } from './styles';

function App() {

  const [resultado, setResultado] = React.useState('');
  const [valorUm, setValorUm] = React.useState(null);
  const [valorDois, setValorDois] = React.useState(null);


  return (

    <SafeAreaView>
      <StatusBar backgroundColor= "#FFA500" />
      <ScrollView>
        <Text style={styles.titulo}>Multiplicador de Números</Text>

        <TextInput style={styles.input} marginTop={30} placeholderTextColor="#aaa" placeholder='Digite o primeiro nº' keyboardType='numeric' value={valorUm} onChangeText={txt=> setValorUm(txt.replace(/[^0-9]/g, '')) }/>
        <TextInput style={styles.input} placeholderTextColor="#aaa" placeholder='Digite o segundo nº' keyboardType='numeric' value={valorDois} onChangeText={txt=> setValorDois(txt.replace(/[^0-9]/g, ''))}/>

        <Pressable style={styles.botao} onPress={() => setResultado(valorUm * valorDois)}>
          <Text style={styles.texto}> multiplicar </Text>
        </Pressable>

      <Text style={styles.resultado}>
      {resultado != null? resultado : ''}
      </Text>


      </ScrollView>



    </SafeAreaView>

  )
}


export default App;