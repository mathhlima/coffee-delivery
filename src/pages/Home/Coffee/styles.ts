import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 1px solid red;
`

export const CardCoffee = styled.div`
  width: 256px;
  height: 310px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  margin-left: 160px;
  margin-right: 160px;
`
