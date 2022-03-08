import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import formatValue from '../../utils/formatValue'
import { useHistory } from 'react-router-dom'

import ProductCart from '../../components/ProductCart'
import { Container } from './styles'
import Header from '../../components/Header'

const Cart = () => {
  const history = useHistory()
  
  const products = useSelector((state) => state.cart)
  console.log(products)

  return (
    <>
      <Header />
      <Container>
        <ul>
          {products.map((product, index) => (
            <ProductCart key={index} product={product} />
          ))}
        </ul>{' '}
        <div>
          <h3>Resumo da compra:</h3>
          <p>
            {formatValue(
              products.reduce((acc, product) => Number(product.price) + acc, 0)
            )}
          </p>
          <Button
            variant='contained'
            endIcon={<ArrowForwardIosIcon />}
            sx={{
              backgroundColor: '#c85311',
              '&:hover': { backgroundColor: '#80CEE1' },
            }}
            onClick={() => history.push('/login')}
          >
            Finalizar compra
          </Button>
        </div>
      </Container>
    </>
  )
}
export default Cart
