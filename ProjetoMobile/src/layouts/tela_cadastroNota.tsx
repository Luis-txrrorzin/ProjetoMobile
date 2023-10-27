import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { CadastrarNotaProps } from "../types";

import firestore from "@react-native-firebase/firestore";
import { useState } from "react";

const TelaCadastroNotas = ({ navigation }: CadastrarNotaProps) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrar() {
        setIsLoading(true);

        firestore()
            .collection('notas')
            .add({
                titulo,
                descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Nota", "Cadastrada com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }
    return (
        <View>
            <Image style={styles.logo} source={require('../assets/new-user-icon.png')} />
            <Text style={styles.texto}>Título</Text>
            <TextInput
                placeholder="Digite um título"
                style={styles.inputs}
                onChangeText={(text) => { setTitulo(text) }} />
            <Text style={styles.texto}>Descrição</Text>
            <TextInput
                placeholder="De uma descrição"
                style={styles.inputs}
                onChangeText={(text) => { setDescricao(text) }} />
            <Pressable
                style={styles.botao}
                onPress={() => cadastrar()}>
                <Text style={styles.botaoTexto}>Cadastrar</Text>
            </Pressable>
        </View>
    )
}




const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 100,
        marginTop: 60,
        marginBottom: 30,
        alignSelf: 'center'
    },
    inputs: {
        width: 350,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        margin: 10,
        alignSelf: 'center'

    },
    texto: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center'
    },
    botao: {
        color: 'black',
        backgroundColor: "#c9c9c5",
        borderRadius: 20,
        alignItems: "center",
        marginTop: 2,
        marginHorizontal: 100
    },
    botaoTexto: {
        fontSize: 20,
    }


});

export default TelaCadastroNotas;