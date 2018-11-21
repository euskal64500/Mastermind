import { connect } from 'react-redux';
import Guess from '../components/Guess';

const mapStateToProps = (state, ownProps) => ({
  guessId: ownProps.id,
  pegIds: state.guesses[ownProps.id].pegs,
  focused: state.guesses[ownProps.id].focused
});

const GuessContainer = connect(
  mapStateToProps,
  null,
)(Guess);

export default GuessContainer;
