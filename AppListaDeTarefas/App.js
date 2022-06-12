import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, TextInput, Button, FlatList, StyleSheet } from "react-native";
import { openDatabase } from "react-native-sqlite-storage";


const db = openDatabase({
  name: "rn_sqlite",
});



const App = () => {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const criarTabelas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `CREATE TABLE IF NOT EXISTS tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, nome VARCHAR(20))`,
        []
      );
    });
  };

  const adicionarTarefa = () => {
    if (!tarefa) {
      alert("Insira uma tarefa");
      return false;
    }

    db.transaction(txn => {
      txn.executeSql(
        `INSERT INTO tarefas (nome) VALUES (?)`,
        [tarefa],
        (sqlTxn, res) => {
          //console.log(`${tarefa} Tarefa adicionada com sucesso!`);
          getTarefas();
          setTarefa("");
        },
        //error => {
        //  console.log("Erro ao inserir uma Tarefa " + error.message);
        // },
      );
    });
  };

  const excluirTarefa = id => {
    db.transaction(tx => {
      tx.executeSql(
        `DELETE FROM tarefas WHERE id = (?)`,
        [id],
        (sqlTxn, res) => {
          setTarefas('')
          getTarefas()
        },
      )
    })
  }


  const getTarefas = () => {
    db.transaction(txn => {
      txn.executeSql(
        `SELECT * FROM tarefas ORDER BY id DESC`,
        [],
        (sqlTxn, res) => {
          console.log("Tarefas lidas com sucesso!");
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({ id: item.id, nome: item.nome });
            }

            setTarefas(results);
          }
        },
        error => {
          console.log("Erro ao obter Tarefas " + error.message);
        },
      );
    });
  };

  const renderTarefa = ({ item }) => {
    return (
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        margin: 5,
        borderBottomWidth: 1,
        borderColor: "#ddd",
      }}>
        <Text style={{fontSize:20, fontWeight: "bold"}}>{item.id}</Text>
        <Text style={{fontSize:20}}>{item.nome}</Text>
        <View>
          <Button title="Excluir"  onPress={ () => excluirTarefa(item.id) } /></View>

      </View>
    );
  };

  useEffect(async () => {
    await criarTabelas();
    await getTarefas();
  }, []);

  return (
    <View>
      <StatusBar backgroundColor="#4ca9c9" />

      <Text style={styles.title}>Lista de Tarefas</Text>

      <TextInput
        placeholder="Informe uma tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={{ marginHorizontal: 8 }}
      />

      <Button title="Adicionar" onPress={adicionarTarefa} />

      <FlatList
        data={tarefas}
        renderItem={renderTarefa}
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

})

export default App;

