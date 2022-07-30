import { ShoppingCart } from 'phosphor-react'
import coffees from '../../../local-json/coffee.json'
import {
  CardCoffee,
  CoffeeContainer,
  Description,
  NameText,
  OurCoffeeContainer,
  TextInfo,
  TypeText,
  ValueCoffee,
} from './styles'

export function OurCoffee() {
  return (
    <OurCoffeeContainer>
      <p>Nossos cafés</p>
      <CoffeeContainer>
        {coffees.map(({ id, name, description, type, img, value }) => (
          <CardCoffee key={id}>
            <img src={img} alt="" />

            <TextInfo>
              <TypeText>
                <span>{type}</span>
              </TypeText>

              <NameText>{name}</NameText>

              <Description>{description}</Description>
              <ValueCoffee>R$ {value}</ValueCoffee>
            </TextInfo>

            <ShoppingCart color="#C47F17" size={22} weight="fill" />
          </CardCoffee>
        ))}
      </CoffeeContainer>
    </OurCoffeeContainer>

    // <div>
    //   {coffees.map(({ name, id, type, img }) => (
    //     <div key={id}>
    //       {name}
    //       {type}
    //       <img src={img} alt="" />
    //     </div>
    //   ))}
    // </div>
  )
}
