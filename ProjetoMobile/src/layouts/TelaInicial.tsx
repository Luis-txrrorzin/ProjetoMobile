import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, } from 'react-native';

import { HomeProps } from '../types';

const TelaInicial = ({ navigation, route }: HomeProps) => {
  return (
    <View>
      <ScrollView>
        <Pressable
          style={styles.botao}
          onPress={() => navigation.navigate('CadastrarCliente')} >
          <Text style={styles.botaoTexto}>Cadastrar Clientes</Text>
        </Pressable>

        <Pressable
          style={styles.botao}
          onPress={() => navigation.navigate('CadastrarAtendimento')} >
          <Text style={styles.botaoTexto}>Cadastrar Atendimento</Text>
        </Pressable>

        <Pressable
          style={styles.botao}
          onPress={() => navigation.navigate('ListarCliente')} >
          <Text style={styles.botaoTexto}>Listar Clientes</Text>
        </Pressable>

        <Pressable
          style={styles.botao}
          onPress={() => navigation.navigate('ListarAtendimento')} >
          <Text style={styles.botaoTexto}>Listar Atendimentos</Text>
        </Pressable>
        
      </ScrollView>

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
    color: 'blue',
    backgroundColor: "#7B68EE",
    borderRadius: 3,
    alignItems: "center",
    marginTop: 50,
    marginHorizontal: 30
  },
  botaoTexto: {
    fontSize: 20,
    color: 'black'
  }
});
export default TelaInicial;