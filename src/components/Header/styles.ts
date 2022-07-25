import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 104px;
  display: flex;
  justify-content: space-between;
`

export const LogoAndIcons = styled.div`
  margin: 32px 160px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CardLocation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`

export const Location = styled.div`
  background: ${(props) => props.theme['purple-light']};
  width: 143px;
  height: 38px;
  border-radius: 6px;
  display: flex;
  align-items: center;

  span {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const Cart = styled.button`
  background: ${(props) => props.theme['yellow-light']};
  width: 38px;
  height: 38px;
  border-radius: 6px;
  cursor: pointer;
  border: none;
`
