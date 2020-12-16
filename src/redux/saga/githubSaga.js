import {
  call,
  put,
  takeEvery,
  takeLatest,
  select,
  all,
} from 'redux-saga/effects'

import { toast } from 'react-toastify'

import githubApi from 'api/githubApi'

function* githubUserFetch(action) {
  try {
    const resp = yield call(githubApi.get, `/users/${action.payload.userId}`)

    if (resp.status !== 200) new Promise.reject('')

    if (Array.isArray(resp.data)) new Promise.reject('')

    if (!resp.data.id) new Promise.reject('')

    const user = resp.data

    const respFollowers = yield call(githubApi.get, user.followers_url)
    user._followers = respFollowers.data || []

    const respFollowing = yield call(githubApi.get, user.organizations_url)
    user._followings = respFollowing.data || []

    const respRepos = yield call(githubApi.get, user.repos_url)
    user._repos = respRepos.data || []

    yield put({ type: 'GITHUB_USER_SET', payload: { ...user } })
  } catch (e) {
    toast.error('Not found repository')
    yield put({ type: 'GITHUB_USER_SET', payload: false })
  }
}

function* githubUsersFetch(action) {
  try {
    const resp = yield call(githubApi.get, `/users`)

    if (resp.status !== 200) new Promise.reject('')

    if (!Array.isArray(resp.data)) new Promise.reject('')

    const users = resp.data

    yield put({ type: 'GITHUB_USER_LIST_SET', payload: { ...users } })
  } catch (e) {
    toast.error('Not found repositories')
    yield put({ type: 'GITHUB_USER_LIST_SET', payload: false })
  }
}

export default all([
  takeLatest('GITHUB_USER_FETCH_REQUEST', githubUserFetch),
  takeLatest('GITHUB_USER_LIST_FETCH_REQUEST', githubUsersFetch),
])
