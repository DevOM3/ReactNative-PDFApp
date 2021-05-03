import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import {Button} from 'native-base';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.mainBody}>
        <Image style={styles.logo} source={require('../logo.png')} />
        <Text style={styles.title}>DATA DESIGN BOOK</Text>
        <Text style={styles.appText}>Mechanical Engineering</Text>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('ElementsScreen')}>
          <Text style={styles.btnText}>TAKE ME IN</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdfdfd',
    height: Dimensions.get('window').height,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainBody: {
    marginTop: 75,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 80,
    backgroundColor: '#ffff',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    shadowColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  logo: {
    width: 294,
    height: 277,
    marginLeft: 10,
    marginTop: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    lineHeight: 42,
    marginTop: 20,
    color: '#3E4993',
    fontWeight: 'bold',
  },
  appText: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 42,
    marginTop: 10,
    color: '#fdfdfd',
    fontWeight: 'bold',
    backgroundColor: '#3E4993',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 20,
    paddingLeft: 11,
    paddingRight: 11,
  },
  button: {
    width: 240,
    height: 45,
    borderRadius: 200,
    backgroundColor: '#FE7F9C',
    marginTop: 30,
    marginLeft: 40,
    marginBottom: 60,
    textAlign: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 240,
  },
});
