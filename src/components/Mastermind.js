import React from 'react';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  ImageBackground,
  StyleSheet,
  View
} from 'react-native';
import PopupContainer from '../containers/PopupContainer';
import Board from './Board';
import Menu from './Menu';
import { gameApp, enableBatching } from '../reducers/reducers';

const logger = createLogger({ collapsed: true });
const store = createStore(enableBatching(gameApp), {}, applyMiddleware(thunk, logger));
const styles = StyleSheet.create({
  backgroundImage: {
    display: 'flex',
    flex: 1,
    width: null,
    height: null,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  },
  header: {
    height: 25,
    backgroundColor: 'brown',
    borderBottomWidth: 1,
    borderBottomColor: '#F27777'
  },
  menu: { height: 35 },
  popup: { flex: 1 },
  board: {
    flex: 1,
    maxWidth: 400,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 30
  }
});

const srcImage = require('../assets/playstationbgd.png');

const MastermindApp = () => (
  <Provider store={store}>
    <ImageBackground
      source={srcImage}
      style={styles.backgroundImage}
    >
      <PopupContainer style={styles.popup} />
      <View style={styles.header} />
      <View style={styles.menu}>
        <Menu />
      </View>
      <View style={styles.board}>
        <Board />
      </View>
    </ImageBackground>
  </Provider>
);

export default MastermindApp;
