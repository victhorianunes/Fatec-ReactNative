import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { StatusBar } from 'expo-status-bar';

import React from 'react';

import { View, Text, Button, StyleSheet, TextInput, Switch, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    const [nome, setNome] = React.useState('')
    const [idade, setIdade] = React.useState('')
    const [genero, setGenero] = React.useState(null)
    const [escolaridade, setEscolaridade] = React.useState(null)
    const [limite, setLimite] = React.useState(0)
    const [nacionalidade, setNacionalidade] = React.useState(false)




    function irConfirm() {
       navigation.navigate('Confirm', { nome, idade, genero, escolaridade, limite, nacionalidade });
 }

    return (
        <View style={styles.container}>
            <Text style={styles.tituloPag}>Abertura de conta</Text>

            {/* -- NOME -- */}
            <View style={styles.cxInput}>
                <Text style={styles.titulo}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={text => setNome(text)}
                />
            </View>

            {/* -- IDADE -- */}
            <View style={styles.cxInput}>
                <Text style={styles.titulo}>Idade:</Text>
                <TextInput
                    style={styles.inputIdade}
                    value={idade}
                    onChangeText={text => setIdade(text)}
                    keyboardType='numeric'
                />
            </View>

            {/* -- GÊNERO -- */}

            <View style={styles.cxPicker}>
                <Text style={styles.titulo}>Gênero:</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={genero}
                    onValueChange={itemValue => setGenero(itemValue)}
                >
                    <Picker.Item label='Selecione o gênero' value='' />
                    <Picker.Item label='Masculino' value='masculino' />
                    <Picker.Item label='Feminino' value='feminino' />
                    <Picker.Item label='Outro' value='outro' />
                </Picker>
            </View>
            {/* -- ESCOLARIDADE -- */}
            <View style={styles.cxPicker}>
                <Text style={styles.titulo}>Escolaridade:</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={escolaridade}
                    onValueChange={itemValue => setEscolaridade(itemValue)}
                >
                    <Picker.Item label='Selecione a escolaridade' value='' />
                    <Picker.Item
                        label='Ensino Fundamental incompleto'
                        value='ensino fundamental incompleto'
                    />
                    <Picker.Item
                        label='Ensino Fundamental completo'
                        value='ensino fundamental completo'
                    />
                    <Picker.Item
                        label='Ensino Médio incompleto'
                        value='ensino médio incompleto'
                    />
                    <Picker.Item
                        label='Ensino Médio completo'
                        value='ensino médio completo'
                    />
                    <Picker.Item
                        label='Ensino Superior incompleto'
                        value='ensino superior incompleto'
                    />
                    <Picker.Item
                        label='Ensino Superior completo'
                        value='ensino superior completo'
                    />
                </Picker>
            </View>

            {/* -- LIMITE -- */}

            <View style={styles.cxSlider}>
                <Text style={styles.titulo}>Limite:</Text>
                <Slider
                    thumbTintColor={"#FF784F"}
                    minimumTrackTintColor={"#ffa686"}
                    style={styles.slider}
                    minimumValue={10}
                    maximumValue={500}
                    step={5}
                    onValueChange={value => setLimite(value)}
                    value={limite}
                />
                <Text>{limite.toFixed(0)}</Text>
            </View>

            {/* -- NACIONALIDADE -- */}

            <View style={styles.cxInput}>
                <Text style={styles.titulo}>Nacionalidade brasileira:</Text>
                <Switch
                    trackColor={ { true: "#ffa686" } }
                    thumbColor={ "#FF784F" }
                    value={nacionalidade}
                    onValueChange={value => setNacionalidade(value)}
                />
            </View>

            {/* -- BOTÃO -- */}
            <View style={styles.cxButton}>
                <Pressable style={styles.button} onPress={irConfirm}>
                    <Text style={styles.buttonText}>Confirmar</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',



    },

    tituloPag: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: "#FF784F",
        marginTop: 30

    },

    cxInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        // marginLeft: 10,

    },
    titulo: {
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 8,
        marginTop: 16,
        marginLeft: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 2,
        padding: 2,
        width: '60%',
        borderRadius: 4,
        paddingLeft: 2,
        borderColor: "#FF784F"
    },

    inputIdade: {
        borderWidth: 2,
        padding: 2,
        width: '20%',
        borderRadius: 4,
        paddingLeft: 2,
        borderColor: "#FF784F"
    },
    cxPicker: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 10,
    },
    picker: {
        width: '65%',

    },
    cxSlider: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 10,
    },
    slider: {
        width: 250

    },
    cxButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    button: {
        backgroundColor: '#FF784F',
        //backgroundColor: '#008080',
        borderRadius: 4,
        paddingVertical: 8,
        paddingHorizontal: 16,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff'
    }

})
