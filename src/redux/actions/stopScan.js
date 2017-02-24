import { STOP_SCAN } from './../constants/constants'
import update from 'react-addons-update';

export function stopScan() {
  return {
    type: STOP_SCAN
  }
}

export function reducer(state, action) {

  switch (action.type) {

    case STOP_SCAN:
      return update(state, {
        scan : {
          scans : {
            $set : 0
          },
          status : {
            $set : 'stopped'
          }
        }
      })

    default:
      return state;
  }
}
