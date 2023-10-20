import React, { useState } from 'react';
import {
    StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

const Ex3 = () => {
    const [texto, setTexto] = useState('');

    return <>
        <View style={styles.container}>
            <Text>{texto}</Text>
            <TextInput 
                style={styles.caixaTexto}
                onChangeText={(text) => {setTexto(text)}}/>
        </View>
    </>
}

export default Ex3;

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
