import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Detalhes: undefined;
  CadastroUsuario: undefined;
};

//HomeScreen
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

//LoginScreen
type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

//CadastroUsuario
type CadastroUsuarioProps = NativeStackScreenProps<RootStackParamList, 'CadastroUsuario'>;

export type { RootStackParamList, 
  HomeProps, 
  LoginProps,
  CadastroUsuarioProps};