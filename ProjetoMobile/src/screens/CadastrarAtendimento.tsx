import { View } from "react-native";
import { CadastrarAtendimentoProps } from "../types";
import TelaCadastroAtendimento from "../layouts/tela_cadastroAtendimento";

const CadastrarAtendimentoScreen = ({ navigation, route }: CadastrarAtendimentoProps) =>{
    return (
      <View >
          <TelaCadastroAtendimento navigation={navigation} route={route}/>
      </View>
    );
  };

  export default CadastrarAtendimentoScreen;