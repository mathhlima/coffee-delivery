import coffees from '../../../local-json/coffee.json'

export function OurCoffee() {
  return (
    <div>
      {coffees.map(({ name, id }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  )
}
