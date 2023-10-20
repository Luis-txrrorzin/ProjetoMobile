import React, { ReactElement } from 'react';
import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { HomeProps } from '../types';
import ExemploStylesText from './ExemploStylesText';
import ExemploStylesView from './ExemploStyleView';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';

const lista = [
  { key: 1, descricao: 'teste' },
  { key: 2, descricao: 'teste2' },
  { key: 3, descricao: 'teste3' },
  { key: 4, descricao: 'teste4' }
];

const listaSection = [
  { title: 'A', data: [{ key: 1, descricao: 'Ana' }] },
  { title: 'B', data: [{ key: 2, descricao: 'Bruno' }] },
  { title: 'C', data: [{ key: 3, descricao: 'Carlos' }] },
  { title: 'D', data: [{ key: 4, descricao: 'Douglas' }] },
  { title: 'E', data: [{ key: 5, descricao: 'Elio' }] },
  { title: 'F', data: [{ key: 6, descricao: 'Fábio' }] },
];


export default ({ navigation, route }: HomeProps) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detalhes')} />
      
      
      <Pressable
        style={styles.botao}
        onPress={() => navigation.navigate('Detalhes')}>
          <Text style={{fontSize: 50}}>Botão</Text>
      </Pressable>    

      <ExemploStylesView/>
      <Image 
        source={require('../assets/usuario.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  botao:{
    backgroundColor: 'green',
  }
});
