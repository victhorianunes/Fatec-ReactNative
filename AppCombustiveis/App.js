import React, { Component, useState } from 'react';
import { View, Text, Image, SafeAreaView, StatusBar, ScrollView, Pressable, TextInput } from 'react-native';
import { styles } from './styles';

function App() {

  const [gasolina, setGasolina] = React.useState(null)
  const [alcool, setAlcool] = React.useState(null)
  const [custoBeneficio, setCustoBeneficio] = React.useState(null)


  return (

    <SafeAreaView>
      <StatusBar backgroundColor="#FFA500" />
      <ScrollView>
        <Text style={styles.titulo}>Cálculo de custo-benefício</Text>
        <Image source={{ uri: 'https://www.royalficinstitucional.com.br/wp-content/uploads/2019/07/qual-combustivel-compensa-mais-alcool-ou-gasolina-fb.png' }} style={styles.image} />
        <TextInput style={styles.input} label="alcool" marginTop={30} placeholderTextColor="#aaa" placeholder='Preço do álcool' keyboardType='numeric' value={alcool} onChangeText={txt => setAlcool(txt.replace(/[^0-9]/g, '.'))} />
        <TextInput style={styles.input} placeholderTextColor="#aaa" placeholder='Preço da gasolina' keyboardType='numeric' value={gasolina} onChangeText={txt => setGasolina(txt.replace(/[^0-9]/g, '.'))} />

        <Pressable style={styles.botao} onPress={() => {
          if (alcool / gasolina > 0.7) setCustoBeneficio("Gasolina é melhor")
          else setCustoBeneficio("Álcool é melhor")
        }}>
          <Text style={styles.texto}> CALCULAR </Text>
        </Pressable>

        <Text style={styles.resultado}>
          {custoBeneficio}
        </Text>


      </ScrollView>



    </SafeAreaView>

  )
}


export default App;