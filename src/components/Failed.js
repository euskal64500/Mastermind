import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Entypo';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1
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
    color: '#F27777'
  },
  messageBox: {
    display: 'flex',
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageImage: {
    width: 200,
    height: 100,
    marginTop: 20
  }
});

const srcImage = require('../assets/failed.png');

const Failed = ({ onClose }) => (
  <View style={styles.content}>
    <View style={styles.control}>
      <TouchableOpacity style={styles.closeBox} onPress={onClose}>
        <Icon name="circle-with-cross" style={styles.icon} />
      </TouchableOpacity>
    </View>
    <View style={styles.messageBox}>
      <Image source={srcImage} resizeMode="contain" style={styles.messageImage} />
    </View>
  </View>
);

Failed.defaultProps = { onClose: null };

Failed.propTypes = { onClose: PropTypes.func };

export default Failed;
