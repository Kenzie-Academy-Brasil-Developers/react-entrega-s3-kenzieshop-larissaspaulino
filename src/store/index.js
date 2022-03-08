import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import cartReducers from './modules/cart/reducers'
import productsReducers from './modules/products/reducers'

const reducers = combineReducers({cart: cartReducers, listProducts: productsReducers})
const store = createStore(reducers, applyMiddleware(thunk))

export default store