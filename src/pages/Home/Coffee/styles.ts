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

  img {
    width: 120px;
    height: 120px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  span {
    display: block;
    text-align: center;
  }
`

export const TextInfo = styled.div`
  content: '';
  display: inline-block;
`
export const ButtonCard = styled.div``
export const TypeText = styled.div`
  width: 81px;
  height: 21px;
  border-radius: 100px;
  background: ${(props) => props.theme['yellow-light']};
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 10px;
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const NameText = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-size: 20px;
`
export const Description = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme['base-label']};
`
export const ValueCoffee = styled.span``
