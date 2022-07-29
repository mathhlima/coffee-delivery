import coffees from '../../../local-json/coffee.json'
import { CardCoffee, CoffeeContainer, OurCoffeeContainer } from './styles'

export function OurCoffee() {
  return (
    <OurCoffeeContainer>
      <p>Nossos cafés</p>
      <CoffeeContainer>
        {coffees.map(({ id, name, description, type, img, value }) => (
          <CardCoffee key={id}>
            <img src={img} alt="" />
            {type}
            {name}
            {description}
            R$ {value}
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
