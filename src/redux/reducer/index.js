import { combineReducers } from 'redux'

import userReducer from './userReducer'
import githubReducer from './githubReducer'

export default combineReducers({
  user: userReducer,
  github: githubReducer,
})
