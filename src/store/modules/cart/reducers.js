import { ADD_PRODUCT, DEL_PRODUCT } from './actionTypes'

const initialState = JSON.parse(localStorage.getItem('@cart')) || []

const cartReducers = (state = initialState, action) => {

  const { product } = action

  switch (action.type) {

    case ADD_PRODUCT:
      return product

    case DEL_PRODUCT:
      return product
      
    default:
      return state
  }
}

export default cartReducers
