import React from 'react';
import {
    StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

type Ex1Props = {
    titulo: string;
}

const Ex1 = (props: Ex1Props) => {
    return <>
        <View style={styles.container}>
            <Text>{props.titulo}</Text>
            <TextInput style={styles.caixaTexto}/>
        </View>
    </>
}

export default Ex1;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        borderWidth: 3,
        borderColor: 'red'
    },
    caixaTexto: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'orange'

    }
});
