import {StyleSheet } from 'react-native';
import { Button, Text, Row } from 'react-quick-style-components';
export default function Footer() {
    return (
        <Row style={styles.container}>
            <Button
                style={styles.button}
            >
                <Text style={styles.text}>Next</Text>
            </Button>
        </Row>
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
