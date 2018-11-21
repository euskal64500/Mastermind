/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  StyleSheet
} from 'react-native';
import GuessContainer from '../containers/GuessContainer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
});

const GuessList = ({ ids }) => (
  <FlatList
    contentContainerStyle={styles.container}
    testID="guesslist"
    data={ids}
    keyExtractor={item => item}
    renderItem={({ item }) => <GuessContainer id={item} />}
  />
);

GuessList.defaultProps = { ids: [1, 1, 1, 1] };

GuessList.propTypes = { ids: PropTypes.array };

export default GuessList;
