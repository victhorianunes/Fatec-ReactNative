import React, { Component, useState } from 'react';
import { View, Text, Image, SafeAreaView, StatusBar, ScrollView, Pressable, TextInput } from 'react-native';
import { styles } from './styles';

function App() {

  const [resultado, setResultado] = React.useState(null)

  return (

    <SafeAreaView>
      <StatusBar backgroundColor="#FFA500" />
      <ScrollView>
        <Text style={styles.titulo}>Jogo do N° aleatório</Text>
        <Image source={{ uri: 'https://static3.tcdn.com.br/img/img_prod/460977/tapete_para_banheiro_cubo_interrogacao_super_mario_bros_beek_45602_1_20201211171642.jpeg' }} style={styles.image} />
        <Text style={styles.texto}>Pense em um número de 0 a 10</Text>

        <Text style={styles.resultado}>
          {resultado}
        </Text>

        <Pressable style={styles.botao} onPress={() => {
            let aleatorio = Math.floor(Math.random() * 10);
            setResultado(aleatorio);

         }}>
          <Text style={styles.textoButton}> DESCOBRIR </Text>
        </Pressable>

        
      </ScrollView>



    </SafeAreaView>

  )
}


export default App;