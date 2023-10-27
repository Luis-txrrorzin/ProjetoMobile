import { View } from "react-native";
import { HomeProps, LoginProps } from "../types";
import Principal from "../layouts/Principal";
import TelaLogin from "../layouts/tela_login";

const LoginScreen = ({ navigation, route }: LoginProps) =>{
    return (
      <View >
          <TelaLogin navigation={navigation} route={route}/>
      </View>
    );
  };

  export default LoginScreen;