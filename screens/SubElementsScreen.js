import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, ScrollView, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

export default function SubElementsScreen({route, navigation}) {
  const [subElements, setSubElements] = useState([]);

  useEffect(() => {
    firestore()
      .collection('Elements')
      .doc(route.params.id)
      .collection('SubElements')
      .onSnapshot(snapshot =>
        setSubElements(
          snapshot.docs.map(doc => ({
            id: doc.id,
            name: doc.data()?.name,
            link: doc.data()?.link,
          })),
        ),
      );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.elementsWrapper}>
        <Text style={styles.sectionTitle}>Design Data Book</Text>
        <Text style={styles.elementTitle}>
          SUB ELEMENTS OF {route.params.name}
        </Text>
        <ScrollView style={styles.elements}>
          {subElements.map(element => (
            <TouchableOpacity
              style={styles.item}
              key={element.id}
              onPress={() => {
                Linking.openURL(element.link);
              }}>
              <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{element?.name}</Text>
              </View>
              <View style={styles.circular}></View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  elementsWrapper: {
    paddingTop: 35,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fdfdfd',
    textAlign: 'center',
    backgroundColor: '#3E4993',
    padding: 7,
    marginHorizontal: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  elementTitle: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#3E4993',
    color: '#fdfdfd',
    marginHorizontal: 20,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  elements: {
    height: '82%',
    backgroundColor: '#fdfdfd',
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 5,
    borderColor: '#3E4993',
    borderWidth: 2,
    marginHorizontal: 20,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#3E4993',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: '80%',
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#3E4993',
    borderWidth: 2,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
});
