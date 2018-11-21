import { connect } from 'react-redux';
import GuessList from '../components/GuessList';

const isNumeric = aString => !Number.isNaN(Number.parseInt(aString, 10));

const getGuessIds = (guesses) => {
  const ids = Object.keys(guesses);
  return ids.filter(value => isNumeric(value));
};

const mapStateToProps = state => ({ ids: getGuessIds(state.guesses) });

const GuessListContainer = connect(
  mapStateToProps,
  null,
)(GuessList);

export default GuessListContainer;
