import React, { Component } from 'react';
import { View, StyleSheet, Button, Linking } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Button title="Click Me" onPress={ ()=>{ Linking.openURL('http://rickynoviansyah.netlify.app/')}} />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#800080',
  },
});