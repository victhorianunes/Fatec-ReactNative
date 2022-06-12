import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

export default function Confirm ({ route }) {
	const navigation = useNavigation();
   
    return (

        <View style={styles.content}>
            <Text style={styles.title}>Dados Informados:</Text>
            <Text style={styles.text}>Nome: {route.params?.nome || 'Não informado'}</Text>
            <Text style={styles.text}>Idade: {route.params?.idade || 'Não informada'}</Text>
            <Text style={styles.text}>Gênero: {route.params?.genero || 'Não informado'} </Text>
            <Text style={styles.text}>Escolaridade: {route.params?.escolaridade || 'Não informada'}</Text>
            <Text style={styles.text}>Limite: {route.params?.limite } </Text>
            <Text style={styles.text}>Nacionalidade: {route.params?.nacionalidade ? 'Brasileira' : 'Extrangeira'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#6A8D73",
        marginTop: 30
    },

    text: {
        fontSize: 15

    },

    content: {
      marginTop: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })