import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";

type CarregamentoProps = {
    isLoading: boolean;
}

const Carregamento = (props: CarregamentoProps) => {
    return (
        <Modal
            visible={props.isLoading}>
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
            </Modal>
    )
}
export default Carregamento;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})