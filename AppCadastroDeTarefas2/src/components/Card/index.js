import React, {Component, useState} from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';
 
function Card({data, funcCarregarTarefas}){
  const [id, setId] = useState(data?.id)
  const [title, setTitle] = useState(data?.title)
  const [description, setDescription] = useState(data?.description)
 
  const excluirTarefa = async () => {
    const response = await api.delete(`/tasks/${id}`);
    await funcCarregarTarefas();
  }
 
  const navigation = useNavigation();
 
  async function irFormulario(){
      navigation.navigate('Formulario', { id: id, title: title, description: description, atualizarLista: funcCarregarTarefas});
  }
 
 
  return(
    <View>
     
      <View style={styles.card}>
        <Text style={styles.titulo}>{title}</Text>
       
        <Text style={styles.descricao}>{description}</Text>
 
        <TouchableOpacity style={styles.buttonEditar} onPress={irFormulario}>
          <Text style={{fontSize:20, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Editar</Text>
        </TouchableOpacity>
 
        <TouchableOpacity style={styles.buttonExcluir} onPress={excluirTarefa}>
          <Text style={{fontSize:20, color: 'white', textAlign: 'center', fontWeight: 'bold'}}>Excluir</Text>
        </TouchableOpacity>
      </View>
 
    </View>
  );
}
 
const styles = StyleSheet.create({
  card:{
    shadowColor: '#000',
    backgroundColor: '#cbd28e',
    shadowOffset: {width:0, height: 1},
    shadowOpacity: 0.5,
    margin: 15,
    padding: 15, 
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
  },
  titulo:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,
  },
  descricao:{
    fontSize: 20,
    padding: 15,
  },
  buttonEditar: {
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: "#8EA604",
    marginBottom: 10,
    width:85,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  buttonExcluir: {
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: "#8C1C13",
    marginBottom: 10,
    width: 85,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
});
 
export default Card;
