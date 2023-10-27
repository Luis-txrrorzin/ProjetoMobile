import { View } from "react-native";
import { CadastrarProdutoProps } from "../types";

import TelaCadastroProdutos from "../layouts/tela_cadastroProduto";

const CadastrarProdutoScreen = ({ navigation, route }: CadastrarProdutoProps) =>{
    return (
      <View >
          <TelaCadastroProdutos navigation={navigation} route={route}/>
      </View>
    );
  };

  export default CadastrarProdutoScreen;