import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 104px;
  display: flex;
  justify-content: space-between;
`

export const CardLocation = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Location = styled.div`
  background: ${(props) => props.theme['purple-light']};
  width: 143px;
  height: 38px;
  border-radius: 6px;
`

export const Cart = styled.div`
  background: ${(props) => props.theme['yellow-light']};
  width: 38px;
  height: 38px;
  align-items: center;
`
