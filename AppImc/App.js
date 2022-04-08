import React, { Component, useState } from 'react';
import { View, Text, Image, SafeAreaView, StatusBar, ScrollView, Pressable, TextInput } from 'react-native';
import { styles } from './styles';

function App() {

  const [peso, setPeso] = React.useState(null)
  const [altura, setAltura] = React.useState(null)
  const [resultado, setResulado] = React.useState(null)
  const imc = peso / (altura/100)**2



  return (

    <SafeAreaView>
      <StatusBar backgroundColor="#FFA500" />
      <ScrollView>
        <Text style={styles.titulo}>Cálculo de IMC</Text>
        <Image source={{ uri: 'https://guiadafarmacia.com.br/wp-content/uploads/2021/02/corpo-imc.jpg' }} style={styles.image} />
        <TextInput style={styles.input} marginTop={30} placeholderTextColor="#aaa" placeholder='peso (kg)' keyboardType='numeric' value={peso} onChangeText={txt => setPeso(txt.replace(/[^0-9]/g, ' '))} />
        <TextInput style={styles.input} placeholderTextColor="#aaa" placeholder='altura (cm)' keyboardType='numeric' value={altura} onChangeText={txt => setAltura(txt.replace(/[^0-9]/g, ' '))} />

        <Pressable style={styles.botao} onPress= {() => {

          if (imc < 18.5)
          {
            setResulado("Abaixo do peso")
          }
          else if (imc <= 29.9) 
          {
            setResulado("Peso normal")
          }
          else if (imc <= 29.9)
          {
            setResulado("Sobrepeso")
          }
          else if (imc <= 34.9)
          {
            setResulado("Obesidade grau I")
          }
          else if (imc <= 39.9)
          {
            setResulado("Obesidade grau II")
          }
          else
          {
            setResulado("Obesidade mórbida")
          }

        }}>

          <Text style={styles.texto}> CALCULAR </Text>
        </Pressable>

        <Text style={styles.resultado}>
          {resultado}
        </Text>


      </ScrollView>



    </SafeAreaView>

  )
}


export default App;