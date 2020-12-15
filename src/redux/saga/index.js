import { all } from 'redux-saga/effects'

import githubSaga from './githubSaga'

export default function* rootSaga() {
  return yield all([githubSaga])
}
