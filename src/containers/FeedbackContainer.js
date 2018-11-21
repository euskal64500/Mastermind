import { connect } from 'react-redux';
import Feedback from '../components/Feedback';

const getPegColors = (state, id) => {
  const pegIds = state.feedbacks[id].pegs;
  return pegIds.map(i => state.pegs[i].color);
};

const mapStateToProps = (state, ownProps) => ({
  pegIds: state.feedbacks[ownProps.id].pegs,
  colors: getPegColors(state, ownProps.id)
});

const FeedbackContainer = connect(
  mapStateToProps,
  null,
)(Feedback);

export default FeedbackContainer;
