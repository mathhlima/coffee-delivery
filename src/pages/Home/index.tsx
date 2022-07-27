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
            <FirstLine>
              <IconShopping>
                <ShoppingCart size={16} color="#FFFFFF" weight="fill" />
              </IconShopping>
              <p>Compra simples e segura</p>
              <IconTimer>
                <Timer size={16} color="#FFFFFF" weight="fill" />
              </IconTimer>
              <p>Embalagem mantém o café intacto</p>
            </FirstLine>

            <SecondLine>
              <IconPackeage>
                <Package size={16} color="#FFFFFF" weight="fill" />
              </IconPackeage>

              <p>Entrega rápida e rastreada</p>

              <IconCoffee>
                <Coffee size={16} color="#FFFFFF" weight="fill" />
              </IconCoffee>

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
