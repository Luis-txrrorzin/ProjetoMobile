import { View } from "react-native";
import Principal from "../layouts/Principal";
import { CadastroUsuarioProps, HomeProps, LoginProps } from "../types";
import TelaLogin from "../layouts/TelaLogin";
import TelaCadastroUsuario from "../layouts/TelaCadastroUsuario";

const CadastroUsuarioScreen = ({ navigation, route }: CadastroUsuarioProps) => {
    return (
        <TelaCadastroUsuario navigation={navigation} route={route} />
    );
};

export default CadastroUsuarioScreen;