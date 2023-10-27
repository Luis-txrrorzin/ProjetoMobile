import { Pressable, StyleSheet, Text, View, FlatList, Alert } from "react-native"
import { ListarClienteProps } from "../types";

import firestore from "@react-native-firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { IClientes } from "../models/IClientes";

const TelaListarCliente = ({ navigation }: ListarClienteProps) => {
    const [clientes, setClientes] = useState([] as IClientes[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('clientes')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as IClientes[];

                setClientes(data);
                setIsLoading(false);
            });
        return () => subscribe();
    }, []);

    function deletarNota(id: string) {
        setIsLoading(true);

        firestore()
            .collection('clientes')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Cliente", "Removido com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    function alterarNota(id: string) {
        navigation.navigate("AlterarCliente", { id: id })
    }

    return (
        <View>
            <Text style={{ fontSize: 30, fontWeight: "bold", alignSelf: 'center', marginTop: 5 }}>Listagem de Clientes</Text>
            <FlatList data={clientes}
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
                                </Pressable>
                            </View>
                            <View style={styles.botao_alterar}>
                                <Pressable
                                    onPress={() => alterarNota(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 30 }}>
                                        A
                                    </Text>
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
        borderColor: 'blue',
        margin: 5,
        borderRadius: 5,
        padding: 3,
        flexDirection: 'row'
    },
    dados_card: {
        flex: 1
    },
    botao_deletar: {
        backgroundColor: 'red',
        borderRadius: 3,
        width: 30,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao_alterar: {
        backgroundColor: 'green',
        borderRadius: 3,
        width: 30,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default TelaListarCliente;