import { ADD_PRODUCT, DEL_PRODUCT } from './actionTypes'

const initialState = JSON.parse(localStorage.getItem('@cart')) || []

const cartReducers = (state = initialState, action) => {
  const { cartProducts } = action

  switch (action.type) {
    case ADD_PRODUCT:
      return cartProducts

    case DEL_PRODUCT:
      return cartProducts

    default:
      return state
  }
}

export default cartReducers
