import React, { useState } from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import firestore from "@react-native-firebase/firestore";
import { CadastrarAtendimentoProps } from "../types";

function validarCPF(cpf: string) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false;
    }

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    if (resto !== parseInt(cpf.charAt(9))) {
        return false;
    }

    soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.charAt(i - 1)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10 || resto === 11) {
        resto = 0;
    }

    return resto === parseInt(cpf.charAt(10));
}

function validarNumeroResidencia(numeroResidencia: string) {
    // Verifique se o número da residência consiste apenas em dígitos
    return /^\d+$/.test(numeroResidencia);
}

function validarDataNascimento(dataNasc: string) {
    // Verifique se a data de nascimento está no formato "dd/mm/aaaa"
    return /^\d{2}\/\d{2}\/\d{4}$/.test(dataNasc);
}

const TelaCadastrarAtendimento = ({ navigation }: CadastrarAtendimentoProps) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [dataNasc, setDataNasc] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrarAtendimento() {
        setIsLoading(true);

        if (!nome || !cpf || !rua || !numero || !bairro || !cidade || !estado || !dataNasc || !descricao) {
            Alert.alert("Erro", "Preencha todos os campos");
            setIsLoading(false);
            return;
        }

        if (!validarCPF(cpf)) {
            Alert.alert("Erro", "CPF inválido");
            setIsLoading(false);
            return;
        }

        if (!validarNumeroResidencia(numero)) {
            Alert.alert("Erro", "Número de residência inválido");
            setIsLoading(false);
            return;
        }

        if (!validarDataNascimento(dataNasc)) {
            Alert.alert("Erro", "Data de nascimento em formato incorreto");
            setIsLoading(false);
            return;
        }

        firestore()
            .collection('atendimentos')
            .add({
                nome,
                cpf,
                rua,
                numero,
                bairro,
                cidade,
                estado,
                dataNasc,
                descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Atendimento", "Cadastrado com sucesso");
                navigation.navigate('Home');
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    return (
        <ScrollView>
            <View>
                <Image style={styles.logo} source={require('../assets/new-product-icon2.png')} />
                <Text style={styles.texto}>Nome</Text>
                <TextInput
                    placeholder="Nome completo"
                    style={styles.inputs}
                    onChangeText={(text) => { setNome(text) }} />
                <Text style={styles.texto}>CPF</Text>
                <TextInput
                    placeholder="CPF"
                    style={styles.inputs}
                    onChangeText={(text) => { setCpf(text) }} />
                <Text style={styles.texto}>Rua</Text>
                <TextInput
                    placeholder="Rua"
                    style={styles.inputs}
                    onChangeText={(text) => { setRua(text) }} />
                <Text style={styles.texto}>Número</Text>
                <TextInput
                    placeholder="Número"
                    style={styles.inputs}
                    onChangeText={(text) => { setNumero(text) }} />
                <Text style={styles.texto}>Bairro</Text>
                <TextInput
                    placeholder="Bairro"
                    style={styles.inputs}
                    onChangeText={(text) => { setBairro(text) }} />
                <Text style={styles.texto}>Cidade</Text>
                <TextInput
                    placeholder="Cidade"
                    style={styles.inputs}
                    onChangeText={(text) => { setCidade(text) }} />
                <Text style={styles.texto}>Estado</Text>
                <TextInput
                    placeholder="Estado"
                    style={styles.inputs}
                    onChangeText={(text) => { setEstado(text) }} />
                <Text style={styles.texto}>Data de nascimento</Text>
                <TextInput
                    placeholder="dd/mm/aaaa"
                    style={styles.inputs}
                    onChangeText={(text) => { setDataNasc(text) }} />
                <Text style={styles.texto}>Descrição</Text>
                <TextInput
                    placeholder="Descrição do atendimento"
                    style={styles.inputs}
                    onChangeText={(text) => { setDescricao(text) }} />

                <Pressable
                    style={styles.botao}
                    onPress={() => cadastrarAtendimento()}>
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
        backgroundColor: "#7B68EE",
        borderRadius: 2,
        alignItems: "center",
        marginTop: 2,
        marginHorizontal: 100,
        marginBottom: 10,
    },
    botaoTexto: {
        fontSize: 20,
        color: 'black'
    }
});

export default TelaCadastrarAtendimento;
