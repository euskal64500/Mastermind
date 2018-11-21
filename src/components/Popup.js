import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  StyleSheet,
  View
} from 'react-native';
import Congrats from './Congrats';
import Failed from './Failed';
import Help from './Help';

const Message = ({ type, onClose }) => {
  switch (type) {
    case 'help':
      return <Help onClose={onClose} />;
    case 'success':
      return <Congrats onClose={onClose} />;
    case 'failure':
      return <Failed onClose={onClose} />;
    default:
      return <View />;
  }
};

Message.defaultProps = {
  type: 'help',
  onClose: null
};

Message.propTypes = {
  type: PropTypes.oneOf(['help', 'success', 'failure']),
  onClose: PropTypes.func
};

const styles = StyleSheet.create({
  modal: { flex: 1 },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  popup: {
    width: 250,
    height: 250,
    backgroundColor: 'brown',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#F27777'
  }
});

const Popup = ({ visible, type, onClose }) => (
  <Modal visible={visible} transparent onRequestClose={() => {}} style={styles.modal}>
    <View style={styles.container}>
      <View style={styles.popup}>
        <Message type={type} onClose={onClose} />
      </View>
    </View>
  </Modal>
);

Popup.defaultProps = {
  visible: false,
  type: 'help',
  onClose: null
};

Popup.propTypes = {
  visible: PropTypes.bool,
  type: PropTypes.oneOf(['help', 'success', 'failure']),
  onClose: PropTypes.func
};

export default Popup;
