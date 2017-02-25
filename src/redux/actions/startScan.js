import { UPDATE_SCAN_LIST, INITIALIZING_SCAN} from './../constants/constants'
import wifi from 'react-native-android-wifi'
import update from 'react-addons-update';

export function lastScan(data) {
  return {
    type: UPDATE_SCAN_LIST,
    data
  }
}

export function initializingScan() {
  return {
    type: INITIALIZING_SCAN
  }
}

export function startScan() {
  return dispatch => {

    wifi.loadWifiList((wifiStringList) => {
      var wifiArray = JSON.parse(wifiStringList);
      dispatch(lastScan(wifiArray))
    },
      (error) => {
        console.log(error);
      }
    );


  }
}

export function reducer(state, action) {

  switch (action.type) {

    case INITIALIZING_SCAN: {
      return update(state, {
        scan: {
          status: {
            $set: 'initializing'
          },
          scans : {
            $set : 0
          }
        }
      })
    }

    case UPDATE_SCAN_LIST:
      return update(state, {
        scan: {
          scans: {
            $set: state.scan.scans + 1 
          },
          status: {
            $set: 'running'
          },
          lastScan: {
            data: {
              $set: action.data
            }
          }
        }
      })

    default:
      return state;
  }
}
