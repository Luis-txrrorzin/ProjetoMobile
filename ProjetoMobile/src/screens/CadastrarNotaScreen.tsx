import { View } from "react-native";
import { CadastrarNotaProps } from "../types";
import TelaCadastroNotas from "../layouts/tela_cadastroNota";

const CadastrarNotaScreen = ({ navigation, route }: CadastrarNotaProps) =>{
    return (
      <View >
          <TelaCadastroNotas navigation={navigation} route={route}/>
      </View>
    );
  };

  export default CadastrarNotaScreen;