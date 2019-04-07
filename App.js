import React from 'react';
import {StyleSheet, 
        Text,
        View,
        FlatList } from 'react-native';
import {AntDesign} from '@expo/vector-icons';

export default class App extends React.Component {

  componentDidMount() {
    console.log("antes");
    debugger
    console.log("depois");
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <AntDesign name='back' style={styles.imgPizza} color='black' size={50}/>
          <Text>Welcome to React Native</Text>
          <Text>Welcome to React Native</Text>
          <Text>Welcome to React Native</Text>
        </View>
        
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  header: {
    flex: 0,
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'blue',
    textAlign: 'center',
    fontSize: 20
  },
  welcome: {
    //flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70
  }
});
