import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import { LoginProps } from "../types";

import auth from "@react-native-firebase/auth";
import { useState } from "react";

const TelaLogin = ({ navigation }: LoginProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function logar() {
        if (email && senha) {
            setIsLoading(true);

            try {
                auth()
                    .signInWithEmailAndPassword(email, senha)
                    .then(() => { navigation.navigate('Home') })
                    .catch((error) => console.log(error))
                    .finally(() => setIsLoading(false))
            } catch (error) {
                console.log(error);
                setIsLoading(false);
            }
        }
    }

    function redefinirSenha() {
        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert("Redefinir senha", "Enviamos um email para você"))
            .catch((error) => console.log(error))
    }

    return (
        <View>
            <Image style={styles.logo} source={require('../assets/user-icon.png')} />
            <Text style={styles.texto}>E-mail</Text>
            <TextInput
                style={styles.inputs}
                onChangeText={(text) => { setEmail(text) }} />
            <Text style={styles.texto}>Senha</Text>
            <TextInput
                style={styles.inputs}
                onChangeText={(text) => { setSenha(text) }} />
            <Pressable
                style={styles.botao}
                onPress={() => logar()}>
                <Text style={styles.botaoTexto}>Entrar</Text>
            </Pressable>

            <View style={styles.botoesRow}>
                <Pressable
                    style={styles.botaoSemBorda}
                    onPress={redefinirSenha}>
                    <Text style={styles.botaoEsqueci}>Esqueceu a senha?</Text>
                </Pressable>
                <Pressable
                    style={styles.botaoSemBorda}
                    onPress={() => navigation.navigate('Cadastrar')}>
                    <Text style={styles.botaoCriarConta}>Criar conta</Text>
                </Pressable>
            </View>

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
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center'
    },
    botoesRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },
    botao: {
        color: 'black',
        backgroundColor: "#7B68EE",
        borderRadius: 20,
        alignItems: "center",
        marginTop: 1,
        marginHorizontal: 100
    },
    botaoTexto: {
        fontSize: 20,
    },
    botaoEsqueci: {
        fontSize: 20,
        color: 'blue'
    },
    botaoSemBorda: {
        borderRadius: 20,
        marginTop: 1,
        marginHorizontal: 100
    },
    botaoCriarConta: {
        fontSize: 20,
        color: 'blue'
    }

});

export default TelaLogin;