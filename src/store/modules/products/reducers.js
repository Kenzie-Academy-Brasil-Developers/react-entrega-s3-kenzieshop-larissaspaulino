import { ALL_PRODUCTS } from './actionTypes'

const initialState = {
  products: [],
}


const productsReducers = (state = initialState, action) => {
  switch (action.type) {

    case ALL_PRODUCTS: 
    const { products } = action
    return { products }
      
      default: 
      return state
  }
}
export default productsReducers