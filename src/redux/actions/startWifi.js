import { LOADING_WIFI, SET_WIFI_STATE } from './../constants/constants'
import wifi from 'react-native-android-wifi'

export function initializing(isLoading) {
  return {
    type: LOADING_WIFI,
    isLoading
  }
}

export function setWifiState(isEnabled) {
  return {
    type: SET_WIFI_STATE,
    isEnabled
  }
}

export function startWifi() {
  return dispatch => {

    dispatch(initializing(true))

    wifi.isEnabled((isEnabled) => {
      console.log('enable2',isEnabled )

        if (isEnabled)
          dispatch(setWifiState(true))
        else
          dispatch(setWifiState(false))

        dispatch(initializing(true))

      }
    );

  }
}

export function reducer(state, action) {

  switch (action.type) {

    case LOADING_WIFI:
      return Object.assign({}, state, {
        isLoading: action.isLoading
      })

    case SET_WIFI_STATE:
      return Object.assign({}, state, {
        isEnabled: action.isEnabled
      })

    default:
      return state;
  }
}
