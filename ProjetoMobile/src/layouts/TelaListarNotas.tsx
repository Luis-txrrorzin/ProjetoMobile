import { Alert, Pressable, StyleSheet, FlatList, Text, TextInput, View, Image,} from 'react-native';
import { useState, useEffect } from "react";
import firestone from '@react-native-firebase/firestore';
import { INotas } from "../models/INotas";
import { ListarNotasProps, HomeProps, LoginProps } from "../types";

export default ({navigation, route }: ListarNotasProps) => {
    const [notas, setNotas] = useState([] as INotas[]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestone()
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
             <Text style={{fontSize: 20}}>Listagem de Notas</Text>
             <FlatList
                data={notas}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <Text>{info.index}</Text>
                            <Text>{info.item.titulo}</Text>
                            <Text>{info.item.descricao}</Text>
                        </View>
                    );
               } }>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create ({
    card: {
        borderWidth:2,
        borderColor: 'grey',
        margin: 5,
        borderRadius: 10,
        padding: 3
    }
});