import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import IconButton from '@mui/material/IconButton'
import { Container } from './styles'
import Tooltip from '@mui/material/Tooltip'

const Product = ({ product }) => {
  return (
    <Container>
      <img src={product.image}></img>
      <h3>{product.title}</h3>
      <div>
        <h2>{product.price}</h2>
        <Tooltip title='Clique para adicionar o produto ao carrinho'>
          <IconButton
            aria-label='add to shopping cart'
            sx={{ color: '#0c0d0d', '&:hover': { color: '#80CEE1' } }}
            // onClick={dispatch(addProductCart(product))}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Container>
  )
}
export default Product
