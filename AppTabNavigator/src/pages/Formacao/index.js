import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function Pessoal() {


  

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            Formação Acadêmica
          </Text>
          <Text style={styles.text}>Instituição: FATEC Rubens Lara</Text>
          <Text style={styles.text}>Curso: Sistemas para Internet</Text>
          <Text style={styles.text}>Semestre: Cursando o último semestre</Text>
          



        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {

  container: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    color: "#028090"
  },

  text: {
    fontSize: 20,
    marginTop: 5,
    textAlign: 'center'

  },

  img: {
    width: 200,
    height: 200,
    margin: 15,
    alignSelf: 'center',
    borderRadius: 200
  },

  




}
