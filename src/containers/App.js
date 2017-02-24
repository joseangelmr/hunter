import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Root from '../components/Root';
import * as connectivityActions from '../redux/actions/index';

function mapStateToProps(state) {
  return {
    app: state.app,
    isLoading : state.connectivity.isLoading,
    isEnabled : state.connectivity.isEnabled,
    scan : state.scan
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...connectivityActions}, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
