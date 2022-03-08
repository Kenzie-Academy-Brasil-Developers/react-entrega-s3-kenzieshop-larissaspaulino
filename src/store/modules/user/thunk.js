import api from '../../../services/api'
import { signIn } from './actions'

export const signInThunk = (userData) => (dispatch, getState) => {
  api
    .post('/sessions/', userData)
    .then((res) => {
      localStorage.setItem('@user: token', res.data.access)
      // localStorage.setItem('@user: userInfo', res.data.user)

      dispatch(signIn(res.data.access))
    })
    .catch((err) => console.log(err))
}
