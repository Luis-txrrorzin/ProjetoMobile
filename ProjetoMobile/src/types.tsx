import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Detalhes: undefined;
  CadastroUsuario: undefined;
  CadastroNota: undefined;
  ListarNota: undefined;
};

//HomeScreen
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

//LoginScreen
type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

//CadastroUsuario
type CadastroUsuarioProps = NativeStackScreenProps<RootStackParamList, 'CadastroUsuario'>;

//CadastroUsuario
type CadastrarNotaProps = NativeStackScreenProps<RootStackParamList, 'CadastroNota'>;

//ListarNotas
type ListarNotasProps = NativeStackScreenProps<RootStackParamList, 'ListarNota'>;

export type { RootStackParamList, 
  HomeProps, 
  LoginProps,
  CadastroUsuarioProps,
  CadastrarNotaProps,
  ListarNotasProps};