import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import { Container } from './styles'
import { useSelector, useDispatch } from 'react-redux'

import Product from '../../components/Product'
// import api from '../../services/api'
import { getProductsThunk } from '../../store/modules/products/thunk'

const Home = () => {
  const { products } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  // const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // api.get('/products')
    // .then((res) => {
    //   setProducts(res.data)
    //   setLoading(false)
    // })

    dispatch(getProductsThunk(setLoading))
  }, [])

  if (loading) {
    return (
      <CircularProgress sx={{ margin: '45%' }} size={50} />
    )
  }

  return (
    <Container>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  )
}
export default Home
