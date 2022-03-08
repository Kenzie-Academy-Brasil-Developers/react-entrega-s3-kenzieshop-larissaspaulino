import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
// import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { Container } from './styles'
import Tooltip from '@mui/material/Tooltip'
import { useDispatch } from 'react-redux'

import formatValue from '../../utils/formatValue'
import { addProductThunk } from '../../store/modules/cart/thunk'

const Product = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <Container>
      <img src={product.image} alt='produto' />
      <h3>{product.title}</h3>
      <div>
        <h4>{formatValue(product.price)}</h4>

        <Tooltip title='Clique para adicionar o produto ao carrinho'>
          <IconButton
            aria-label='add to shopping cart'
            sx={{
              backgroundColor: '#80CEE1',
              color: '#0c0d0d',
              '&:hover': { backgroundColor: '#c85311' },
            }}
            onClick={() => dispatch(addProductThunk(product))}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Container>
  )
}
export default Product
