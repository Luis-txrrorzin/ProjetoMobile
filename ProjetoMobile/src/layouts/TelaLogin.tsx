import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import { HomeProps, LoginProps } from "../types";

import auth from "@react-native-firebase/auth";

export default ({ navigation, route }: LoginProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function logar() {
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

    function redefinirSenha() {
        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert("Redefinir senha",
                "Enviamos um email para você"))
            .catch((error) => console.log(error))
    }

    return (
        <View style={styles.container}>
            <View style={styles.container_login}>
                <Text>Login</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setEmail(text) }} />

                <Text>Senha</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setSenha(text) }} />

                <Pressable
                    style={styles.botao}
                    onPress={() => logar()}
                    disabled={isLoading}>
                    <Text style={styles.desc_botao}>Entrar</Text>
                </Pressable>
            </View>

            <View style={styles.container_botoes}>
                <Pressable
                    style={styles.botao}
                    onPress={() => { navigation.navigate('CadastroUsuario')}}>
                    <Text style={styles.desc_botao}>Cadastrar-se</Text>
                </Pressable>

                <Pressable
                    style={styles.botao}
                    onPress={redefinirSenha}>
                    <Text style={styles.desc_botao}>Esqueci a senha</Text>
                </Pressable>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8FF'
    },
    container_login: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container_botoes: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30
    },
    desc_botao: {
        fontSize: 20
    }
});
