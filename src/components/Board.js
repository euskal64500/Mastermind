import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import FeedbackListContainer from '../containers/FeedbackListContainer';
import GuessListContainer from '../containers/GuessListContainer';
import ShieldContainer from '../containers/ShieldContainer';

const styles = StyleSheet.create({
  board: {
    display: 'flex',
    flex: 1,
    borderColor: 'brown',
    backgroundColor: 'brown',
    borderRadius: 5,
    borderWidth: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'space-around'
  },
  play: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around'
  },
  solution: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around'
  },
  feedback: { width: 60 },
  guess: { flex: 1 },
  empty: { width: 60 },
  shield: { flex: 1 }
});

const Board = () => (
  <View style={styles.board}>
    <View style={styles.play}>
      <View style={styles.feedback}>
        <FeedbackListContainer />
      </View>
      <View style={styles.guess}>
        <GuessListContainer />
      </View>
    </View>
    <View style={styles.solution}>
      <View style={styles.empty} />
      <View style={styles.shield}>
        <ShieldContainer />
      </View>
    </View>
  </View>
);

export default Board;
