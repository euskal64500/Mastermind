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
import FeedbackPegContainer from '../containers/FeedbackPegContainer';

const styles = StyleSheet.create({
  container: {
    height: 38,
    width: 40,
    display: 'flex',
    borderColor: 'brown',
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: 'column',
    alignContent: 'space-around',
    backgroundColor: '#F27777',
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 5,
    marginRight: 5
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

const Feedback = ({ pegIds, colors }) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <FeedbackPegContainer id={pegIds[0]} color={colors[0]} />
      <FeedbackPegContainer id={pegIds[1]} color={colors[1]} />
    </View>
    <View style={styles.row}>
      <FeedbackPegContainer id={pegIds[2]} color={colors[2]} />
      <FeedbackPegContainer id={pegIds[3]} color={colors[3]} />
    </View>
  </View>
);

Feedback.defaultProps = { pegIds: [1, 2, 3, 4], colors: ['', '', '', ''] };

Feedback.propTypes = { pegIds: PropTypes.array, colors: PropTypes.array };

export default Feedback;
