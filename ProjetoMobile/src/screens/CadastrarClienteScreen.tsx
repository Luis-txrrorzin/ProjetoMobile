import { View } from "react-native";
import { CadastrarClienteProps } from "../types";

import TelaCadastrarClientes from "../layouts/tela_cadastroCliente";

const CadastrarClienteScreen = ({ navigation, route }: CadastrarClienteProps) =>{
    return (
      <View >
          <TelaCadastrarClientes navigation={navigation} route={route}/>
      </View>
    );
  };

  export default CadastrarClienteScreen;