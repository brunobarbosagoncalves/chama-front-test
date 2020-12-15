const USER_CLEAN = 'USER_CLEAN'
const USER_LIST_SET = 'USER_LIST_SET'
const USER_SET = 'USER_SET'
const USER_HISTORY_ADD = 'USER_HISTORY_ADD'

const initialState = {
  user: {},
  userlist: [],
  history: [],
}
export default (state = initialState, action) => {
  switch (action.type) {
    case USER_CLEAN:
      return initialState

    case USER_LIST_SET:
      return { ...state, userlist: action.payload }

    case USER_SET:
      return { ...state, user: action.payload }

    case USER_HISTORY_ADD:
      return { ...state, history: [...state.history, action.payload] }

    default:
      return state
  }
}
