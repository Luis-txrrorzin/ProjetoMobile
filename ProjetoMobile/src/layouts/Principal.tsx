import React from 'react';
import { Pressable, StyleSheet, Text, View, } from 'react-native';

import { HomeProps } from '../types';

const Principal = ({ navigation, route }: HomeProps) => {
  return (
    <View>
      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('CadastrarNota')} >
        <Text style={styles.botaoTexto}>Cadastrar</Text>
      </Pressable>
      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('CadastrarProduto')} >
        <Text style={styles.botaoTexto}>Cadastrar Produto</Text>
      </Pressable>


      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('ListarNota')} >
        <Text style={styles.botaoTexto}>Listar Notas</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    color: 'black',
    backgroundColor: "#c9c9c5",
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
    marginHorizontal: 100
  },
  botaoTexto: {
    fontSize: 20,
  }
});
export default Principal;