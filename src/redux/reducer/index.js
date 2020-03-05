import { combineReducers } from 'redux'

import Auth from './auth'
import routeMap from './routeMap'

export default combineReducers({
  Auth,
  routeMap
})