import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const styles = StyleSheet.create({
  congrats: {
    display: 'flex',
    flex: 1,
    width: null,
    height: null,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignContent: 'space-between'
  },
  control: {
    display: 'flex',
    height: 30,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  closeBox: {
    marginTop: 5,
    marginRight: 5
  },
  icon: {
    fontSize: 25,
    color: 'brown'
  },
  messageBox: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageText: {
    color: '#F27777',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20
  }
});

const srcImage = require('../assets/balloons.png');

const Congrats = ({ onClose }) => (
  <ImageBackground
    source={srcImage}
    style={styles.congrats}
  >
    <View style={styles.control}>
      <TouchableOpacity style={styles.closeBox} onPress={onClose}>
        <Icon name="circle-with-cross" style={styles.icon} />
      </TouchableOpacity>
    </View>
    <View style={styles.messageBox}>
      <Text style={styles.messageText}>{'Congratulations !!!!\nYou broke the code'}</Text>
    </View>
  </ImageBackground>
);

Congrats.defaultProps = { onClose: null };

Congrats.propTypes = { onClose: PropTypes.func };

export default Congrats;
