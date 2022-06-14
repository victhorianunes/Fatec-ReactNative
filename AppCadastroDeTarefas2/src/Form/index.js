import React, {Component, useState} from 'react';
import { Pressable, View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../services/api';
 
export default function Form({route}) {
  const [id, setId] = useState(route.params?.id)
  const [newTitle, setNewTitle] = useState(route.params?.title)
  const [newDescription, setNewDescription] = useState(route.params?.description)
 
  const navigation = useNavigation();
 
  const salvarTarefa = async () => {
   
    const body = JSON.stringify({title: newTitle, description: newDescription})
 
    if (id !== undefined){
      const response = await api.put(`/tasks/${id}`, body, {headers: {'Content-Type': 'application/json'}});
      await route.params?.atualizarLista()
    }
    else{
      const response = await api.post('/tasks', body, {headers: {'Content-Type': 'application/json'}});
      await route.params?.atualizarLista()
    }
 
    navigation.goBack()  
  }
 
 return (
   <View style={{paddingTop: 10, alignItems: 'center', flex:1}}>
     <TextInput
        style={styles.input}
        defaultValue={route.params?.title}
        placeholder ='Nome da Tarefa'
        onChangeText={(text)=> setNewTitle(text)}
      />
 
      <TextInput
        style={styles.input}
        placeholder ='Descrição da Tarefa'
        defaultValue={route.params?.description}
        onChangeText={(text)=> setNewDescription(text)}
      />
      <Pressable style={styles.buttonSalvar}  onPress={salvarTarefa}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Salvar</Text>
        </Pressable>
 
   </View>
  );
}
 
const styles = StyleSheet.create({
  input:{
    width: 350,
    height: 40,
    textSize: 25,
    alignSelf:'center',
    borderColor: '#DDD',
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#FFF',
    margin: 4,
  },

  buttonSalvar:{
    margin: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 5,
    width: 100,
    backgroundColor: '#8EA604',

  }
});
