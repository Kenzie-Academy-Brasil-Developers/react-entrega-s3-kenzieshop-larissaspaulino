import { ADD_PRODUCT, DEL_PRODUCT } from "./actionTypes"

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    product,
})

export const delProduct = (product) => ({
    type: DEL_PRODUCT,
    product,
})