import { INITIALIZING_WIFI, SET_WIFI_STATUS } from './../constants/constants'
import wifi from 'react-native-android-wifi'
import update from 'react-addons-update';

export function setWifiState(status) {
    return {
        type: SET_WIFI_STATUS
    }
}

export function initializingWifi() {
    return {
        type: INITIALIZING_WIFI
    }
}

export function initializeWifi() {
    return dispatch => {

        dispatch(initializingWifi())

        wifi.isEnabled((isEnabled) => {
            if (isEnabled) {
                dispatch(setWifiState())
            } else {
                wifi.setEnabled(true);
                dispatch(setWifiState())
            }
        })

    }
}

export function reducer(state, action) {

    switch (action.type) {

          case INITIALIZING_WIFI: {
            return update(state, {
                connectivity: {
                    isLoading : {
                        $set : true
                    }
                }
            })
        }

        case SET_WIFI_STATUS: {
            return update(state, {
                connectivity: {
                    isEnabled: {
                        $set: true
                    },
                    isLoading : {
                        $set : false
                    }
                }
            })
        }


        default:
            return state;
    }
}
