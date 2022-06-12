import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, Switch, Text, TextInput, View, StyleSheet } from "react-native";
import Mem from "@react-native-async-storage/async-storage";

export default App = () => {
  const [frase, salvarFrase] = useState("");
  const [dia, salvarDia] = useState(true);
  const [pequeno, salvarPequeno] = useState(true);

  const buscar = async () => {
    try {
      const itensMem = await Mem.getitens("memoria");
      if (itensMem == null)
        await armazenar({ frase: frase, dia: dia, pequeno: pequeno });
      else {
        itens = JSON.parse(itensMem);
        salvarFrase(itens.frase);
        salvarDia(itens.dia);
        salvarPequeno(itens.pequeno);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const armazenar = async (itens) => {
    try {
      salvarFrase(itens.frase);
      salvarDia(itens.dia);
      salvarPequeno(itens.pequeno);
      const memValor = JSON.stringify(itens);
      await Mem.setItem("memoria", memValor);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscar().then();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>Frases</Text>
        <View style={{ alignItems: 'center' }}>
          <TextInput style={styles.input}
            placeholder="Insira uma frase..."
            valor={frase}
            onChangeText={valor => {
              armazenar({ frase: valor, dia: dia, pequeno: pequeno }).then();
            }}
          />
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

          <Switch
            trackColor={{ true: "#6483d9" }}
            thumbColor={"#101d42"}
            valor={dia}
            onValueChange={valor => {
              armazenar({ frase: frase, dia: valor, pequeno: pequeno }).then();
            }}
          />


          <Switch
            trackColor={{ true: "#6483d9" }}
            thumbColor={"#101d42"}
            valor={pequeno}
            onValueChange={valor => {
              armazenar({ frase: frase, dia: dia, pequeno: valor }).then();
            }}
          />


        </View>
        <View style={{
          height: 200,
          margin: 20,
          padding: 10,
          borderWidth: 1,
          borderRadius: 4,
          backgroundColor: dia ? "#FFF" : "#000"
        }}>
          <ScrollView>
            <Text style={{
              color: dia ? "#000" : "#FFF",
              fontSize: pequeno ? 13 : 28
            }}
            >{frase}</Text>
          </ScrollView>
        </View>
        <View style={{
          width: "50%",
          marginVertical: 20,
          alignSelf: "center",
          justifyContent: "center"
        }}>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
  },

  title: {
    fontSize: 22,

    textAlign: "center",
  },

  input: {
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 16,
    width: '80%',
  },


})

