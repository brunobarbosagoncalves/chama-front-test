const GITHUB_CLEAN = 'GITHUB_CLEAN'
const GITHUB_USER_CLEAN = 'GITHUB_USER_CLEAN'
const GITHUB_USER_LIST_CLEAN = 'GITHUB_USER_LIST_CLEAN'
const GITHUB_USER_LIST_SET = 'GITHUB_USER_LIST_SET'
const GITHUB_USER_SET = 'GITHUB_USER_SET'
const GITHUB_USER_HISTORY_ADD = 'GITHUB_USER_HISTORY_ADD'

const initialState = {
  user: {},
  userlist: [],
  historic: [],
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GITHUB_CLEAN:
      return initialState

    case GITHUB_USER_CLEAN:
      return { ...state, user: {} }

    case GITHUB_USER_LIST_CLEAN:
      return { ...state, userlist: [] }

    case GITHUB_USER_LIST_SET:
      return { ...state, userlist: action.payload }

    case GITHUB_USER_SET:
      return { ...state, user: action.payload }

    case GITHUB_USER_HISTORY_ADD:
      return { ...state, historic: [action.payload, ...state.historic] }

    default:
      return state
  }
}
