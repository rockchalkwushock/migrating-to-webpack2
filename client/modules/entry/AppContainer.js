import { connect } from 'react-redux';
import { checkToken, logoutUser } from '../auth/actions';
import '../../utils/axiosConfigs';
import App from './App';

const mapStateToProps = state => (
  { auth: state.auth }
);

export default connect(
  mapStateToProps,
  { checkToken, logoutUser }
)(App);
