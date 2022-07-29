import styled from 'styled-components'

export const OurCoffeeContainer = styled.div`
  margin-left: 160px;
  margin-right: 160px;
`

export const CoffeeContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-evenly;
`

export const CardCoffee = styled.div`
  width: 256px;
  height: 310px;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
`
