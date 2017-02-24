import initialState from './initialState';
import { reducer as startScanReducer } from './../actions/startScan'
import { reducer as stopScanReducer } from './../actions/stopScan'
import { reducer as initializeWifiReducer } from './../actions/initializeWifi'


const reducers = [
  startScanReducer,
  stopScanReducer,
  initializeWifiReducer
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    default:
      newState = state;
      break;
  }
  return reducers.reduce((s, r) => r(s, action), newState);
}
