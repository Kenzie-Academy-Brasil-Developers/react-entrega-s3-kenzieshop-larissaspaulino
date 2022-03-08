import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import formatValue from '../../utils/formatValue'

import ProductCart from '../../components/ProductCart'
import { Container } from './styles'

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart)

  return (
    <Container>
      <ul>
        {products.map((product, index) => (
          <ProductCart key={index} product={product} />
        ))}
      </ul>{' '}
      <div>
        <h3>Resumo da compra:</h3>
        <p>{formatValue( products.reduce((acc, product) =>( Number(product.price)) + acc, 0))}</p>
        <Button
          variant='contained'
          endIcon={<ArrowForwardIosIcon />}
          sx={{
            backgroundColor: '#c85311',
            '&:hover': { backgroundColor: '#80CEE1' },
          }}
        >
          Finalizar compra
        </Button>
      </div>
    </Container>
  )
}
export default Cart
