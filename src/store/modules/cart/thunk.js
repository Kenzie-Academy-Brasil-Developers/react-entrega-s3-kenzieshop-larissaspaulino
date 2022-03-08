import { addProduct, delProduct } from './actions'

export const addProductThunk = (product) => (dispatch, getState) => {
  const { cart } = getState()

  if (cart.find((prod) => product.id === prod.id)) {
    product.quantity++
    dispatch(addProduct([...cart]))
    localStorage.setItem('@cart', JSON.stringify(cart))
  } else {
    product.quantity = 1
    dispatch(addProduct([...cart, product]))
    localStorage.setItem('@cart', JSON.stringify([...cart, product]))
  }
}

export const delProductThunk = (product) => (dispatch, getState) => {
  const { cart } = getState()

  if (product.quantity === 1) {
    const newCart = cart.filter((prod) => prod.id !== product.id)
    dispatch(delProduct(newCart))
    localStorage.setItem('@cart', JSON.stringify(newCart))
  } else {
    product.quantity--
    dispatch(delProduct([...cart]))
    localStorage.setItem('@cart', JSON.stringify(cart))
  }
}
