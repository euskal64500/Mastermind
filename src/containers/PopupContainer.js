import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { closePopup } from '../actions';
import Popup from '../components/Popup';

const mapStateToProps = state => ({
  visible: state.popup.show,
  type: state.popup.type
});

const mapDispatchToProps = dispatch => bindActionCreators({ onClose: closePopup }, dispatch);

const PopupContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Popup);

export default PopupContainer;
