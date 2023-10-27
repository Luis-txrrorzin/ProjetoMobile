import { Pressable, StyleSheet, Text, View, FlatList } from "react-native"
import { ListarNotaProps } from "../types";

import firestore from "@react-native-firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { INotas } from "../models/INotas";

const ListarNotaScreen = ({ navigation }: ListarNotaProps) => {
    const [notas, setNotas] = useState([] as INotas[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('notas')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as INotas[];

                setNotas(data);
                setIsLoading(false);
            });
        return () => subscribe();
    }, []);
    return (
        <View>
            <Text style={{ fontSize: 30 }}>Listagem de Notas</Text>
            <FlatList data={notas}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <Pressable
                            >
                            <Text>{info.index}</Text>
                            <Text>{info.item.titulo}</Text>
                            <Text>{info.item.descricao}</Text>
                            </Pressable>
                        </View>
                    )
                }}>

            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
        card:{
            borderWidth: 2,
            borderColor: 'grey',
            margin: 5,
            borderRadius: 10,
            padding: 3
        }
});

export default ListarNotaScreen;