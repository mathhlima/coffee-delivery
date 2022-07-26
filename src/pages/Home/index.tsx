import {
  HomeContainer,
  Intro,
  Info,
  InfoIcons,
  BigInfo,
  SmallInfo,
  IntroText,
  IntroImage,
  FirstLine,
  SecondLine,
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
            <FirstLine>
              <ShoppingCart />
              <p>Compra simples e segura</p>
              <Timer />
              <p>Entrega rápida e rastreada</p>
            </FirstLine>
            <SecondLine>
              <Package />
              <p>Embalagem mantém o café intacto</p>
              <Coffee />
              <p>O café chega fresquinho até você</p>
            </SecondLine>
          </InfoIcons>
        </IntroText>

        <IntroImage>
          <img src={coffeeDelivery} alt="" />
        </IntroImage>
      </Intro>
    </HomeContainer>
  )
}
