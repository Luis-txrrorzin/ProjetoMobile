import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { CadastrarProdutoProps } from "../types";

import firestore from "@react-native-firebase/firestore";
import { useState } from "react";

const TelaCadastroProdutos = ({ navigation }: CadastrarProdutoProps) => {
    const [codigodebarras, setCodigoBarras] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrarProduto() {
        setIsLoading(true);

        firestore()
            .collection('produtos')
            .add({
                codigodebarras,
                nome,
                preco,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Produto", "Cadastrado com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }
    return (
        <ScrollView>
            <View>
                <Image style={styles.logo} source={require('../assets/new-product-icon.png')} />
                <Text style={styles.texto}>Código de Barras</Text>
                <TextInput
                    placeholder="Digite o código de barras"
                    style={styles.inputs}
                    onChangeText={(text) => { setCodigoBarras(text) }} />
                <Text style={styles.texto}>Produto</Text>
                <TextInput
                    placeholder="Digite o nome do produto"
                    style={styles.inputs}
                    onChangeText={(text) => { setNome(text) }} />
                <Text style={styles.texto}>Preço</Text>
                <TextInput
                    placeholder="Digite o preço do produto"
                    style={styles.inputs}
                    onChangeText={(text) => { setPreco(text) }} />
                <Pressable
                    style={styles.botao}
                    onPress={() => cadastrarProduto()}>
                    <Text style={styles.botaoTexto}>Cadastrar</Text>
                </Pressable>
            </View>
        </ScrollView>
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
        fontSize: 25,
        alignContent: 'flex-start',
        marginLeft: 25
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
        color: 'black'
    },



});

export default TelaCadastroProdutos;