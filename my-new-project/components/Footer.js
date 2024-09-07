import {View, StyleSheet, Image } from 'react-native';
// import { Button } from 'react-native-paper';
import { Button, Text } from 'react-quick-style-components';
export default function Footer() {
    return (
        <View style={styles.container}>
            <Button
                style={styles.button}
            >
                <Text style={styles.text} children = "Next"></Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7052ff",
        height: '15%',
        alignItems: "center",
        justifyContent: "center"
    },
    button: {
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 40,
        height: '45%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        fontSize: 16,
        color: '#7052ff',
        fontWeight: 'bold'
    }
});
