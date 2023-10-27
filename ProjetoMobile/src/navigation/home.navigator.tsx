import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import DetalhesScreen from "../screens/DetalhesScreen";
import LoginScreen from "../screens/LoginScreen";
import CadastrarScreen from "../screens/CadastrarScreen";
import CadastrarNotaScreen from "../screens/CadastrarNotaScreen";
import ListarNotaScreen from "../layouts/tela_listarNota";
import CadastrarAtendimentoScreen from "../screens/CadastrarAtendimento";
import ListarAtendimentoScreen from "../layouts/tela_listarAtendimento";
import CadastrarClienteScreen from "../screens/CadastrarClienteScreen";
import ListarClienteScreen from "../layouts/tela_listarCliente";
import CadastrarProdutoScreen from "../screens/CadastrarProdutoScreen";
import AlterarClienteScreen from "../screens/AlterarClienteScreen";


const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detalhes" component={DetalhesScreen} />
            <Stack.Screen name="Cadastrar" component={CadastrarScreen} />
            <Stack.Screen name="CadastrarNota" component={CadastrarNotaScreen} />
            <Stack.Screen name="ListarNota" component={ListarNotaScreen} />
            <Stack.Screen name="CadastrarProduto" component={CadastrarProdutoScreen} />
            <Stack.Screen name="CadastrarAtendimento" component={CadastrarAtendimentoScreen} />
            <Stack.Screen name="ListarAtendimento" component={ListarAtendimentoScreen} />
            <Stack.Screen name="CadastrarCliente" component={CadastrarClienteScreen} />
            <Stack.Screen name="ListarCliente" component={ListarClienteScreen} />
            <Stack.Screen name="AlterarCliente" component={AlterarClienteScreen} />
        </Stack.Navigator>
    );
}


export default HomeNavigator;
