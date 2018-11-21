/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import testIdProp from './TestIdProp';

const SMALL = 12;
const LARGE = 25;
// color scheme: http://www.creativecolorschemes.com/resources/free-color-schemes/earth-tone-color-scheme.shtml
const pegColors = {
  brown: 'brown', // '#B99C6B'
  blue: 'lightblue',
  yellow: 'lightyellow',
  green: 'lightgreen',
  gray: 'gray',
  red: 'tomato',
  white: 'white',
  black: 'black',
  pink: 'hotpink',
  orange: 'orange',
  gold: 'gold',
  ivory: 'ivory',
  transparent: 'transparent'
};

const possibleSizes = ['small', 'large'];
const styles = StyleSheet.create({
  circle: {
    alignItems: 'center',
    borderRadius: 100 / 2,
    borderWidth: 2,
    borderStyle: 'solid',
    justifyContent: 'center'
  },
  label: { color: 'transparent' }
});

// eslint-disable-next-line object-curly-newline
const Peg = ({ id, bgColor, size, text, enable, onPress }) => (
  <TouchableOpacity
    onPress={(enable) ? onPress : null}
    {...testIdProp(`Peg${id}`)}
    style={[styles.circle, {
      backgroundColor: pegColors[bgColor],
      borderColor: 'brown',
      width: (size === 'large') ? LARGE : SMALL,
      height: (size === 'large') ? LARGE : SMALL
    }]}
  >
    <Text style={styles.label}>{ bgColor }</Text>
  </TouchableOpacity>
);

Peg.defaultProps = {
  id: 0,
  enable: false,
  bgColor: 'transparent',
  size: 'large',
  text: '',
  onPress: null
};

Peg.propTypes = {
  id: PropTypes.number,
  bgColor: PropTypes.oneOf(Object.keys(pegColors)),
  enable: PropTypes.bool,
  size: PropTypes.oneOf(possibleSizes),
  text: PropTypes.string,
  onPress: PropTypes.func
};

export default Peg;
