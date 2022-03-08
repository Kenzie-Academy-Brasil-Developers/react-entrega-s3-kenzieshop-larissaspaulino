import { IconButton } from '@mui/material'
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined'
import IndeterminateCheckBoxOutlinedIcon from '@mui/icons-material/IndeterminateCheckBoxOutlined';
import { useDispatch } from 'react-redux';

import { Container, Quantity } from './styles'
import formatValue from '../../utils/formatValue'
import { addProductThunk, delProductThunk } from '../../store/modules/cart/thunk'


const ProductCart = ({ product }) => {

   const dispatch = useDispatch()
   console.log(product)    
   
  return (
    <Container>
        
        <img src={product.image}/>
        <div>
            <h3>{product.title}</h3>
            <h4>{formatValue(product.price * product.quantity)}</h4>
        
        </div>
        <Quantity>
            <IconButton onClick={() => dispatch(addProductThunk(product))}>
                <AddBoxOutlinedIcon/>
            </IconButton>
            <span>{product.quantity}</span>
            <IconButton onClick={() => dispatch(delProductThunk(product))}>
                <IndeterminateCheckBoxOutlinedIcon/>
            </IconButton>
        </Quantity>
    </Container>
  )
}
export default ProductCart