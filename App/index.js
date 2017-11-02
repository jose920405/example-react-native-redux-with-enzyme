import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import setupStore from './Utils/setupStore';
import JestTestScreen from './Containers/JestTestScreen.js';


const store = setupStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <JestTestScreen />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});