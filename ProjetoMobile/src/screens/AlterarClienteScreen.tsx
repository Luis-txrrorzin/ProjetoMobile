import { View } from "react-native";
import { AlterarClienteProps } from "../types";

import AlterarCliente from "../layouts/AlterarCliente";

const AlterarClienteScreen = ({ navigation, route }: AlterarClienteProps) =>{
    return (
      <View >
          <AlterarCliente navigation={navigation} route={route}/>
      </View>
    );
  };

  export default AlterarClienteScreen;