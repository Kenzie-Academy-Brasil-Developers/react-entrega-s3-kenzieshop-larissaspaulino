import { combineReducers } from "redux"
import cart from './modules/cart/reducer'
import listProducts from './modules/products/reducer'
import user from './modules/user/reducer'

export default combineReducers({
    cart, 
    user,
    listProducts,
})