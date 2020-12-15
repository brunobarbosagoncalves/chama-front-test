const GITHUB_USER_CLEAN = 'GITHUB_USER_CLEAN'
const GITHUB_USER_LIST_SET = 'GITHUB_USER_LIST_SET'
const GITHUB_USER_SET = 'GITHUB_USER_SET'
const GITHUB_USER_HISTORY_ADD = 'GITHUB_USER_HISTORY_ADD'

const initialState = {
  user: {},
  userlist: [],
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GITHUB_USER_CLEAN:
      return initialState

    case GITHUB_USER_LIST_SET:
      return { ...state, userlist: action.payload }

    case GITHUB_USER_SET:
      return { ...state, user: action.payload }

    case GITHUB_USER_HISTORY_ADD:
      return { ...state, history: [...state.history, action.payload] }

    default:
      return state
  }
}
