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
import FeedbackContainer from '../containers/FeedbackContainer';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

const FeedbackList = ({ ids }) => (
  <FlatList
    contentContainerStyle={styles.container}
    data={ids}
    keyExtractor={item => item}
    renderItem={({ item }) => <FeedbackContainer id={item} />}
  />
);

FeedbackList.defaultProps = { ids: [1, 1, 1, 1] };

FeedbackList.propTypes = { ids: PropTypes.array };

export default FeedbackList;
