import { ADD_PRODUCT, DEL_PRODUCT } from './actionTypes'

export const addProduct = (cartProducts) => ({
  type: ADD_PRODUCT,
  cartProducts,
})

export const delProduct = (cartProducts) => ({
  type: DEL_PRODUCT,
  cartProducts,
})
