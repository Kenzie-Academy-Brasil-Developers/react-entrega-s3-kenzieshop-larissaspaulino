import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LoginIcon from '@mui/icons-material/Login'
import { IconButton, Badge, Tooltip } from '@mui/material'
import { Container } from './styles'
import { useHistory } from 'react-router-dom'

const Header = () => {

  const history = useHistory()
  
  return (
    <Container>
      <h1 onClick={() => history.push('/')}>tech.shop</h1>
      <div>
      <Tooltip title='Clique para ir ao carrinho'>

        <IconButton sx={{ color: '#c85311', '&:hover': { color: '#80CEE1' } }} onClick = {() => history.push('/cart')}>
          <Badge>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        </Tooltip>
        <Tooltip title='Login'>
          <IconButton
            sx={{ color: '#c85311', '&:hover': { color: '#80CEE1' } }}
            onClick = {() => history.push('/login')}
          >
            <LoginIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Container>
  )
}
export default Header
