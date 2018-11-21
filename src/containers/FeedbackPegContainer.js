import { connect } from 'react-redux';
import Peg from '../components/Peg';

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.id,
  bgColor: ownProps.color,
  enable: false,
  size: 'small'
});

const FeedbackPegContainer = connect(
  mapStateToProps,
  null,
)(Peg);

export default FeedbackPegContainer;
