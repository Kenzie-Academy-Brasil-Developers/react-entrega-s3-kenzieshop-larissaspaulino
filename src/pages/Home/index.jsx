import { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import { Container } from './styles'
import { useSelector, useDispatch } from 'react-redux'

import Product from '../../components/Product'
import { getProductsThunk } from '../../store/modules/products/thunk'
import Header from '../../components/Header'

const Home = () => {
  const { products } = useSelector((state) => state.listProducts)
  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(getProductsThunk(setLoading))
  }, [])

  if (loading) {
    return <CircularProgress sx={{ margin: '45%' }} size={50} />
  }

  return (
    <>
      <Header />
      <Container>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </Container>
    </>
  )
}
export default Home
