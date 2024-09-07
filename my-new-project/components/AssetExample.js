import { View, StyleSheet } from 'react-native';
import { Text, Img } from 'react-quick-style-components';
export default function AssetExample({isActive, stt, scorce, name, image}) {
    const backgroundColor = isActive ? '#fff' : "#7e60fe";
    const color = isActive ? '#000' : "#fff";
    return (
        <View style={[styles.container, { backgroundColor: backgroundColor} ]}>
            <Text style={[styles.paragraph, styles.stt, { color: color }]} text={stt}>
            </Text>
            <Img style={styles.logo} source={require('../assets/icons8-dipper-pines-36.png')} />
            <Text style={[styles.paragraph, { color: color }]} text={name}>
            </Text>
            <Text style={[styles.scorce, { color: color }]} text={scorce}>
            </Text>
        </View>
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
    scorce: {
        flex: 8,
        textAlign: 'right',
        fontWeight: 'bold',
    },
    stt: {
        flex: 1,
    },
});
