import { SafeAreaView, StyleSheet} from 'react-native';
import { useState } from 'react';
import ListData from './components/ListData';
import Footer from './components/Footer';
import data from './data.js'
import { Col, Button, Text, Img, Scroll, Row } from 'react-quick-style-components';

export default function App() {
  let elements = [];
  const [users, setUsers] = useState(data);
  const [isActive, setIsActive] = useState(Array(30).fill(false));

  const handlePress = (index) => {
    let newIsActive = isActive.map((item, index_isActive) => {
      return index_isActive === index;
    })
    setIsActive(newIsActive);
  };
  // Use a for loop to populate the array with elements
  elements = users.map((item, index) => {
    return <Col
        key={index}
        onPress={() => handlePress(index)}
    >
      <ListData
          isActive={isActive[index]}
          stt={index + 1}
          scorce= {item.scorce}
          name={item.name}
          image = {item.image}
      >
      </ListData>
    </Col >
  })

  return (
      <SafeAreaView style={styles.container}>
        <Row style={styles.view}>
          <Button
              style={styles.button}
          >
            <Img
                source={require('./assets/icons8-close-18.png')}
                style={styles.icon}
            />
          </Button>
          <Text style={styles.paragraph}>
            Scoreboard
          </Text>
        </Row>
        <Scroll
            style={styles.scroll_view}
        >
          {elements}
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
