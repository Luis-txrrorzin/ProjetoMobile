import { Pressable, StyleSheet, Text, View, FlatList, Alert } from "react-native"
import { ListarAtendimentoProps, ListarClienteProps } from "../types";

import firestore from "@react-native-firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { IAtendimentos } from "../models/IAtendimentos";

const TelaListarAtendimento = ({ navigation }: ListarAtendimentoProps) => {
    const [atendimentos, setAtendimentos] = useState([] as IAtendimentos[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('atendimentos')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as IAtendimentos[];

                setAtendimentos(data);
                setIsLoading(false);
            });
        return () => subscribe();
    }, []);

    function deletarNota(id: string) {
        setIsLoading(true);

        firestore()
            .collection('atendimentos')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Atendimento", "Removido com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    function alterarNota(id: string) {
        navigation.navigate("AlterarNota", { id: id })
    }

    return (
        <View>
            <Text style={{ fontSize: 30, fontWeight: "bold", alignSelf: 'center', marginTop: 5}}
            >Listagem de Atendimentos</Text>
            <FlatList data={atendimentos}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.dados_card}>
                                <Pressable>
                                    <Text>{info.index}</Text>
                                    <Text>{info.item.nome}</Text>
                                    <Text>{info.item.cpf}</Text>
                                    <Text>{info.item.rua}</Text>
                                    <Text>{info.item.numero}</Text>
                                    <Text>{info.item.bairro}</Text>
                                    <Text>{info.item.cidade}</Text>
                                    <Text>{info.item.estado}</Text>
                                    <Text>{info.item.dataNasc}</Text>
                                    <Text>{info.item.descricao}</Text>
                                </Pressable>
                            </View>
                            <View style={styles.botao_deletar}>
                                <Pressable
                                    onPress={() => deletarNota(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                                        X
                                    </Text>
                                </Pressable>
                            </View>

                        </View>

                    )
                }}>

            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 2,
        borderColor: 'grey',
        margin: 5,
        borderRadius: 10,
        padding: 3,
        flexDirection: 'row'
    },
    dados_card: {
        flex: 1
    },
    botao_deletar: {
        backgroundColor: 'red',
        borderRadius: 5,
        width: 30,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default TelaListarAtendimento;