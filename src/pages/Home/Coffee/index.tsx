import coffees from '../../../local-json/coffee.json'

export function OurCoffee() {
  return (
    <div>
      {coffees.map(({ name, id, type }) => (
        <div key={id}>
          {name}
          {type}
        </div>
      ))}
    </div>
  )
}
