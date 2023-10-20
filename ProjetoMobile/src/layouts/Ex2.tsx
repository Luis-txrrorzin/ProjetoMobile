import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Image,
    View
} from 'react-native';

const Ex2 = () => {
    return <ScrollView>
        <View style={styles.container}>
            <Image style={styles.imagem} source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
            }}/>

            <Image style={styles.imagem} source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
            }}/>

            <Image style={styles.imagem} source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
            }}/>

            <Image style={styles.imagem} source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
            }}/>

            <Image style={styles.imagem} source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
            }}/>
        </View>
    </ScrollView>
}

export default Ex2;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        width: 200,
        height: 200
    }
});