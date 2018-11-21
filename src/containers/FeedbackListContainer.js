import { connect } from 'react-redux';
import FeedbackList from '../components/FeedbackList';

const isNumeric = aString => !Number.isNaN(Number.parseInt(aString, 10));

const getFeedbackIds = (feedbacks) => {
  const ids = Object.keys(feedbacks);
  return ids.filter(value => isNumeric(value));
};

const mapStateToProps = state => ({ ids: getFeedbackIds(state.feedbacks) });

const FeedbackListContainer = connect(
  mapStateToProps,
  null,
)(FeedbackList);

export default FeedbackListContainer;
