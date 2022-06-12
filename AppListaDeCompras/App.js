import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { openDatabase } from "react-native-sqlite-storage";
import { MaterialIcons } from '@expo/vector-icons'


const db = openDatabase({
  name: "rn_sqlite",
});



const App = () => {
  const [produto, setProduto] = useState("");
  const [produtos, setProdutos] = useState([]);
  const [quantidade, setQuantidade] = useState("");

  const criarTabelas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS produtos (id INTEGER PRIMARY KEY AUTOINCREMENT, quantidade INT, nome VARCHAR(20))`,
        []
      );
    });
  };

  const adicionarProduto = () => {
    if (!produto || !quantidade) {
      alert("Insira todas as informações corretamente");
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO produtos (quantidade, nome) VALUES (?,?)`,
        [produto, quantidade],
        (sqlTxn, res) => {

          getProdutos();
          setProduto("");
          setQuantidade("")
        },

      );
    });
  };

  const excluirProduto = id => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM produtos WHERE id = (?)`,
        [id],
        (sqlTxn, res) => {
          setProdutos('')
          getProdutos()
        },
      )
    })
  }


  const getProdutos = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM produtos`,
        [],
        (sqlTxn, res) => {
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, quantidade: item.quantidade, nome: item.nome });
            }

            setProdutos(results);
          }
        },

      );
    });
  };

  const renderProduto = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        margin: 5,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>{item.nome}</Text>
          <Text style={{ fontSize: 20 }}>{item.quantidade}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              deleteProduct(item.id)
            }}
          >
            <MaterialIcons name='delete' size={24} />
          </TouchableOpacity></View>

      </View>
    );
  };

  useEffect(async () => {
    await criarTabelas();
    await getProdutos();
  }, []);

  return (
    <View>
      <StatusBar backgroundColor="#4ca9c9" />

      <Text style={styles.title}>Lista de Compras</Text>

      <TextInput
        style={styles.inputQtd}
        placeholder='Qtd'
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType='numeric'
      />

      <TextInput
        style={styles.inputProduto}
        placeholder='Produto'
        value={produto}
        onChangeText={setProduto}
      />

      <View style={{ alignItems: 'center', margin: 20 }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={addProduct}
        >
          <MaterialIcons name='add' size={30} />
        </TouchableOpacity>
        </View>

      <FlatList
        data={produtos}
        renderItem={renderProduto}
        key={t => t.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 8,
    margin: 16,
    color: "#56bfe4"
  },

  inputProduto: {
    width: 200,
    fontSize: 18,
    padding: 5,
    borderWidth: 1,

  },

  inputQtd: {
    width: 40,
    marginRight: 5,
    fontSize: 18,
    padding: 5,
    borderWidth: 1,

  },

})

export default App;