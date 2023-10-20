import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import HomeScreen from "../screens/HomeScreen";
import DetalhesScreen from "../screens/DetalhesScreen";
import LoginScreen from "../screens/LoginScreen";
import CadastroUsuarioScreen from "../screens/CadastroUsuarioScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="CadastroUsuario" component={CadastroUsuarioScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detalhes" component={DetalhesScreen} />
        </Stack.Navigator>
    );
}

export default HomeNavigator;