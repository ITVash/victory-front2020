import { combineReducers } from 'redux'

import Auth from './auth'
import People from './people'
import routeMap from './routeMap'
import News from './news'

export default combineReducers({
  Auth,
  routeMap,
  People,
  News
})