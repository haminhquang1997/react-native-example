import { SafeAreaView, StyleSheet, View} from 'react-native';
import { useState, useEffect  } from 'react';
// You can import supported modules from npm
import { Card, DefaultTheme  } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Footer from './components/Footer';
import data from './data.js'
import { Col, Button, Text, Img, Scroll } from 'react-quick-style-components';

export default function App() {
  const elements = [];
  const [user, setUser] = useState(data);
  const [isActive, setIsActive] = useState(Array(30).fill(false));

  const handlePress = (index) => {
    const newIsActive = [...isActive];
    newIsActive.forEach((item, j) => {
      newIsActive[j] = j == index ? true : false;
    })
    setIsActive(newIsActive);
  };
  // Use a for loop to populate the array with elements
  user.forEach((item, index) => {
    elements.push(
        <Col
            key={index}
            onPress={() => handlePress(index)}
        >
          <AssetExample
              isActive={isActive[index]}
              stt={index + 1}
              scorce= {item.scorce}
              name={item.name}
              image = {item.image}
          >
          </AssetExample>
        </Col >

    );
  })

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.view}>
          <Button
              style={styles.button}
              children = {<Img
                  source={require('./assets/icons8-close-18.png')}
                  style={styles.icon}
              />}>
          </Button>
          <Text style={styles.paragraph} text="Scoreboard">
          </Text>
        </View>
        <Scroll
            style={styles.scroll_view}
            children = {elements}>
        </Scroll>
        <Footer>
        </Footer>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7e60fe',
  },
  paragraph: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    flex:5
  },
  view: {
    height: '10%',
    borderBottomWidth: 1,
    borderBottomColor: '#927aff',
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-around', // Distributes space around children
    alignItems: 'center', // Aligns children vertically in the center
  },
  button: {
    marginTop: 20,
  },
  scroll_view: {
    backgroundColor: '#7e60fe',
  },
});
