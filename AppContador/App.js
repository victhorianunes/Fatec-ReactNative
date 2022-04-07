import React, { Component, useState } from 'react';
import { View, Text, Image, SafeAreaView, StatusBar, ScrollView, Pressable } from 'react-native';
import { styles } from './styles';

function App() {

  const [contador, setContador] = React.useState(0);


  return (

    <SafeAreaView>
      <StatusBar backgroundColor="#FFA500" barStyle="light-content" />
      <ScrollView>
        <Text style={styles.titulo}>Contador de Pessoas</Text>
        <Text style={styles.numeros}>{contador}</Text>
        <Pressable style={[styles.botao, styles.mais]} onPress={() => setContador(contador + 1)}>
          <Text style={styles.texto}> + </Text>
        </Pressable>
        <Pressable style={[styles.botao, styles.menos]} onPress={() => contador !=0? setContador(contador - 1): ''}>
          <Text style={styles.texto}> - </Text>
        </Pressable>

      </ScrollView>



    </SafeAreaView>

  )
}


export default App;