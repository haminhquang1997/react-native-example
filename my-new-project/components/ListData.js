import { StyleSheet } from 'react-native';
import { Text, Img, Row } from 'react-quick-style-components';
export default function ListData({isActive, stt, score, name, image}) {
    const backgroundColor = isActive ? '#fff' : "#7e60fe";
    const color = isActive ? '#000' : "#fff";
    return (
        <Row style={[styles.container, { backgroundColor: backgroundColor} ]}>
            <Text style={[styles.paragraph, styles.stt, { color: color }]}>
                {stt}
            </Text>
            <Img style={styles.logo} source={require('../assets/icons8-dipper-pines-36.png')} />
            <Text style={[styles.paragraph, { color: color }]}>
                {name}
            </Text>
            <Text style={[styles.score, { color: color }]}>
                {score}
            </Text>
        </Row>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 70,
        paddingLeft:20,
        paddingRight:20,
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        borderRadius: 75,
        backgroundColor: '#fa6393',
        marginLeft: 20,
        marginRight: 20,
        height: 50,
        width: 50,
    },
    score: {
        flex: 8,
        textAlign: 'right',
        fontWeight: 'bold',
    },
    stt: {
        flex: 1,
    },
});
