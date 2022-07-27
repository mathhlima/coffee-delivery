import coffees from '../../../local-json/coffee.json'
import { CardCoffee, CoffeeContainer } from './styles'

export function OurCoffee() {
  return (
    <CoffeeContainer>
      <p>Nossos cafés</p>

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
