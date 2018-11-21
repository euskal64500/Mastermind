import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { nextPegColor } from '../actions';
import Peg from '../components/Peg';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  bgColor: state.pegs[ownProps.id].color,
  enable: state.pegs[ownProps.id].enable,
  size: state.pegs[ownProps.id].size
});

const mapDispatchToProps = (dispatch, ownProps) => bindActionCreators(
  { onPress: () => nextPegColor(ownProps.id) }, dispatch
);

const GuessPegContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Peg);

export default GuessPegContainer;
