import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';
import {
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import testIdProp from './TestIdProp';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 35,
    height: 35,
    backgroundColor: 'brown',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: 10
  },
  icon: {
    fontSize: 25,
    color: '#F27777'
  }
});

const Restart = ({ onRestart }) => (
  <TouchableOpacity
    {...testIdProp('restart')}
    style={styles.container}
    onPress={onRestart}
  >
    <Icon name="cycle" style={styles.icon} />
  </TouchableOpacity>
);

Restart.defaultProps = { onRestart: null };

Restart.propTypes = { onRestart: PropTypes.func };

export default Restart;
