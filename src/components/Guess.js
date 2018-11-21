/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View
} from 'react-native';
import GuessPegContainer from '../containers/GuessPegContainer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: 38, // fixed height
    flexDirection: 'row',
    justifyContent: 'space-around', // horizontal axis placement
    alignItems: 'center',
    backgroundColor: '#F27777',
    borderRadius: 5,
    borderWidth: 2,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 5,
    marginRight: 5
  },
  peg: { flex: 1 }
});

const Guess = ({ pegIds, focused }) => (
  <View style={[
    styles.container,
    { borderColor: focused ? 'pink' : 'brown' }
  ]}
  >
    <GuessPegContainer id={pegIds[0]} style={styles.peg} />
    <GuessPegContainer id={pegIds[1]} style={styles.peg} />
    <GuessPegContainer id={pegIds[2]} style={styles.peg} />
    <GuessPegContainer id={pegIds[3]} style={styles.peg} />
  </View>
);

Guess.defaultProps = { pegIds: [1, 2, 3, 4], focused: false };

Guess.propTypes = { pegIds: PropTypes.array, focused:  PropTypes.bool };

export default Guess;
