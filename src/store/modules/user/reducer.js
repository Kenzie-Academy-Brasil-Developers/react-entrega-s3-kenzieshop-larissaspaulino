import { SIGN_IN } from './actionTypes'

const initialState = {
  token: localStorage.getItem('@user: token') || '',
  // userInfo:  localStorage.getItem('@user: userInfo') || {}, ==== essa api não retorna o user, apenas o token
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN:
      // const { user } = action
      // return {...state, user.token, user.userInfo}
      const { token } = action
      return { ...state, token }

    default:
      return state
  }
}
export default userReducer
