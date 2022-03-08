import { ALL_PRODUCTS } from './actionTypes'

export const getProducts = (products) => ({
  type: ALL_PRODUCTS,
  products,
})
