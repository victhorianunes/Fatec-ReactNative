import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    titulo: {
        fontWeight: 'bold',
        color: "#f38101",
        fontSize: 30,
        textAlign: 'center',
        marginTop: 30,
    },

    botao: {
        backgroundColor: "#f38101",
        margin: 30,
        padding: 5,
        alignItems: 'center',
        borderRadius: 20,
    },

    texto: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold',

    },

    input: {
        borderWidth: 2,
        borderColor: '#f38101',
        color: '#000',
        textAlign: 'center',
        marginHorizontal: 50,
        marginVertical: 10,
        padding: 5,
        fontSize: 25,
        borderRadius: 20
      },

      resultado: {
        fontWeight: 'bold',
        color: "#000",
        fontSize: 35,
        textAlign: 'center',
        marginTop: 5,

      },

      image: {
        width: 410 ,
        height: 210
      },

});

export { styles };
