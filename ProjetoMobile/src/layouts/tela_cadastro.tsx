import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { CadastrarProps } from "../types";

import auth from "@react-native-firebase/auth";
import { useState } from "react";

const TelaCadastro = ({ navigation }: CadastrarProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function cadastrar() {
        setIsLoading(true);

        if (email && senha) {
            auth()
                .createUserWithEmailAndPassword(email, senha)
                .then(() => {
                    Alert.alert("Conta", "Cadastrado com sucesso!")
                    navigation.navigate('Login');
                })
                .catch((error) => {
                    console.log(error);
                    Alert.alert("Erro", String(error))
                })
                .finally(() => { setIsLoading(false) });
        } else setIsLoading(false);
    }
    return (
        <View>
            <Image style={styles.logo} source={require('../assets/new-user-icon.png')} />
            <Text style={styles.texto}>E-mail</Text>
            <TextInput
                placeholder="Digite seu e-mail"
                style={styles.inputs}
                onChangeText={(text) => { setEmail(text) }} />
            <Text style={styles.texto}>Senha</Text>
            <TextInput
                placeholder="Digite sua senha"
                style={styles.inputs}
                onChangeText={(text) => { setSenha(text) }} />
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

export default TelaCadastro;