import { ADD_PRODUCT } from "./actionTypes"

export const addProduct = (products) => ({
    type: ADD_PRODUCT,
    products,
})