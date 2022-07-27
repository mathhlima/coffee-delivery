import coffees from '../../../local-json/coffee.json'

export function OurCoffee() {
  return (
    <h1>Nossos Cafés</h1>
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
