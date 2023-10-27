import { View } from "react-native";
import { HomeProps } from "../types";
import Principal from "../layouts/Principal";
import TelaInicial from "../layouts/TelaInicial";

const HomeScreen = ({ navigation, route }: HomeProps) =>{
    return (
      <View >
        <TelaInicial navigation={navigation} route={route} />
        {/* <Principal navigation={navigation} route={route} /> */}
      </View>
    );
  };

  export default HomeScreen;