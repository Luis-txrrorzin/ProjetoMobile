import {
    Button,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
} from 'react-native';
import { useState } from "react";
import { Alert } from "react-native";
import firestone from '@react-native-firebase/firestore';
import { CadastrarNotaProps } from "../types";

export default ({navigation, route}: CadastrarNotaProps) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setdescricao] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    function cadastrar() {
        setIsLoading(true);

        firestone()
            .collection('notas')
            .add({
                titulo,
                descricao,
                created_at: firestone.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Nota", "Cadastrada com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    return (
        <View>
            <Text>Titulo</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setTitulo(text) }} />
            <Text>Descricao</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setdescricao(text) }} />
            <Pressable
                style={styles.botao}
                onPress={() => cadastrar()}
                disabled={isLoading}>
                <Text style={styles.desc_botao}>Cadastrar</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
