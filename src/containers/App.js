import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Root from '../components/Root';
import * as CounterActions from '../redux/actions/index';

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
