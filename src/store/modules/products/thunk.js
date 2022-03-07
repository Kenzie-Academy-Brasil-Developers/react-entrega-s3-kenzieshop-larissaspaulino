
import { getProducts } from './actions'
import api from '../../../services/api'

export const getProductsThunk = (setLoading) => (dispatch) => {

    api.get('/products')
    .then(res => {
        dispatch(getProducts(res.data))
        setLoading(false)
        })
    .catch(err => console.log(err))
    
}
export default getProductsThunk