import React, {Component, useEffect, useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Button, Pressable} from 'react-native';
import api from '../services/api';
import Card from '../components/Card';
import { useNavigation } from '@react-navigation/native';
 
export default function Tarefas() {
  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(true)
 
  useEffect(async () => {
    await carregarTarefas()
    setLoading(false)
  }, [])
 
  const carregarTarefas = async () => {
    const response = await api.get('/tasks')
    setTarefas(response.data)
  }
 
  const navigation = useNavigation();
 
  async function irFormulario(){
      navigation.navigate('Formulario', {atualizarLista: carregarTarefas});
  }
 
  if(loading){
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
        <ActivityIndicator color="#8EA604" size={40}/>
      </View>
    )
  }else{
    return(
      <SafeAreaView>
        
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Pressable style={styles.buttonIncluir}  onPress={irFormulario}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Incluir Tarefa</Text>
        </Pressable>
        </View>
 
        <FlatList
        data={tarefas}
        keyExtractor={item => item.id.toString() }
        renderItem={ ({item}) => <Card data={item} funcCarregarTarefas={carregarTarefas} /> }
        />
 
      </SafeAreaView>
    );
  }
}
 
const styles = StyleSheet.create({

  card:{
    shadowColor: '#000',
    //backgroundColor: '#dde1b3',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo:{
    fontSize: 18,
    padding: 15,
  },
  descricao:{
    fontSize: 10,
    padding: 15,
  },
  buttonIncluir: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    width: 150,
    backgroundColor: '#8EA604',
  },

  buttonEditar: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "yellow",
    marginVertical: 0,
    marginLeft: 10
  },
  buttonExcluir: {
    borderRadius: 5,
    marginVertical: 20,
    alignSelf: 'flex-start',
    backgroundColor: "gray",
    marginVertical: 0,
    marginLeft: 10,
    backgroundColor: "tomato",
    marginTop: 10,
    marginBottom: 10
  },
});
