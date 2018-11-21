import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reset } from '../actions';
import Restart from '../components/Restart';

const mapDispatchToProps = dispatch => bindActionCreators({ onRestart: reset }, dispatch);

const RestartContainer = connect(
  null,
  mapDispatchToProps,
)(Restart);

export default RestartContainer;
