import {
  HomeContainer,
  Intro,
  Info,
  InfoIcons,
  BigInfo,
  SmallInfo,
  IntroText,
  IntroImage,
  IconShopping,
  IconTimer,
  IconPackeage,
  IconCoffee,
} from './styles'
import coffeeDelivery from '../../assets/copo-coffe.svg'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

export function Home() {
  return (
    <HomeContainer>
      <Intro>
        <IntroText>
          <Info>
            <BigInfo>
              <p>Encontre o café perfeito para qualquer hora do dia</p>
            </BigInfo>

            <SmallInfo>
              <p>
                Com o Coffee Delivery você recebe o seu café onde estiver, a
                qualquer hora
              </p>
            </SmallInfo>
          </Info>

          <InfoIcons>
            <span>
              <IconShopping>
                <ShoppingCart />
                Compra simples e segura
              </IconShopping>
            </span>

            <span>
              <IconTimer>
                <Timer />
                Entrega rápida e rastreada
              </IconTimer>
            </span>

            <span>
              <IconPackeage>
                <Package />
                Embalagem mantém o café intacto
              </IconPackeage>
            </span>

            <span>
              <IconCoffee>
                <Coffee />O café chega fresquinho até você
              </IconCoffee>
            </span>
          </InfoIcons>
        </IntroText>

        <IntroImage>
          <img src={coffeeDelivery} alt="" />
        </IntroImage>
      </Intro>
    </HomeContainer>
  )
}
