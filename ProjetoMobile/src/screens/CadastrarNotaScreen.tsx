import { Text, View } from "react-native";
import { CadastrarNotaProps, HomeProps, LoginProps } from "../types";
import TelaCadastroNota from "../layouts/TelaCadastroNota";

const CadastroNotaScreen = ({ navigation, route }: CadastrarNotaProps) => {
    return (
        <TelaCadastroNota navigation={navigation} route={route} />
    );
};

export default CadastroNotaScreen;