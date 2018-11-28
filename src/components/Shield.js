/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';
import {
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import Peg from './Peg';
import testIdProp from './TestIdProp';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#F27777',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

const Shield = ({ open, code, onUnlock }) => {
  if (open) {
    return (
      <View {...testIdProp('openShield')} style={[styles.container, { backgroundColor: '#F27777' }]}>
        <Peg bgColor={code[0]} style={styles.peg} />
        <Peg bgColor={code[1]} style={styles.peg} />
        <Peg bgColor={code[2]} style={styles.peg} />
        <Peg bgColor={code[3]} style={styles.peg} />
      </View>
    );
  }
  return (
    <View style={[styles.container, { backgroundColor: 'brown' }]}>
      <TouchableOpacity
        {...testIdProp('lock')}
        onPress={onUnlock}
        size={30}
      >
        <Icon name="lock" size={30} color="#F27777" />
      </TouchableOpacity>
    </View>
  );
};

Shield.defaultProps = {
  open: false,
  code: ['', '', '', ''],
  onUnlock: null
};

Shield.propTypes = {
  open: PropTypes.bool,
  code: PropTypes.array,
  onUnlock: PropTypes.func
};

export default Shield;
