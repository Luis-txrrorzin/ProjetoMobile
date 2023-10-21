import { Text, View } from "react-native";
import { ListarNotasProps, HomeProps, LoginProps } from "../types";
import TelaListarNotas from "../layouts/TelaListarNotas";

const ListarNotasScreen = ({ navigation, route }: ListarNotasProps) => {
    return (
        <TelaListarNotas navigation={navigation} route={route} />
    );
};

export default ListarNotasScreen;