import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Principal from './layouts/Principal';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import HomeNavigator from './navigation/home.navigator';
import TelaLogin from './layouts/tela_login';

const App = () => {
  return (
    <NavigationContainer>
      <HomeNavigator/>
    </NavigationContainer>
  );
}

export default App;