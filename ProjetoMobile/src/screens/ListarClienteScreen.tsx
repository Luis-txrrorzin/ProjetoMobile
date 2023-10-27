import { View } from "react-native";
import { ListarClienteProps } from "../types";

import TelaListarCliente from "../layouts/tela_listarCliente";

const ListarClienteScreen = ({ navigation, route }: ListarClienteProps) =>{
    return (
      <View >
          <TelaListarCliente navigation={navigation} route={route}/>
      </View>
    );
  };

  export default ListarClienteScreen;