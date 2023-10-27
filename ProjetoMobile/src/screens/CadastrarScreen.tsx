import { View } from "react-native";
import { CadastrarProps } from "../types";
import TelaCadastro from "../layouts/tela_cadastro";

const CadastrarScreen = ({ navigation, route }: CadastrarProps) =>{
    return (
      <View >
          <TelaCadastro navigation={navigation} route={route}/>
      </View>
    );
  };

  export default CadastrarScreen;