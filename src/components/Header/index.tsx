import { CardLocation, HeaderContainer, Location, Cart } from './styles'
import logoCoffee from '../../assets/logo-coffee.svg'
import logoLocation from '../../assets/icon-location.svg'
import { ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffee} alt="" />

      <CardLocation>
        <Location>
          <img src={logoLocation} alt="" />
          Porto Alegre, RS
        </Location>
        <Cart>
          <ShoppingCart color="#C47F17" size={22} weight="fill" />
        </Cart>
      </CardLocation>
    </HeaderContainer>
  )
}
