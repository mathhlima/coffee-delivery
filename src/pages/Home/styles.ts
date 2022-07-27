import styled from 'styled-components'

export const HomeContainer = styled.main`
  height: 544px;
`

export const Intro = styled.div`
  display: flex;
`

export const IntroText = styled.div`
  margin-left: 160px;
  margin-top: 92px;
`

export const IntroImage = styled.div`
  width: 476px;
  height: 360px;
  margin-right: 160px;
  margin-top: 92px;
`

export const Info = styled.div``

export const BigInfo = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-weight: bold;
  font-size: 48px;
  line-height: 130%;
`
export const SmallInfo = styled.p`
  font-size: 20px;
`

export const InfoIcons = styled.div`
  width: 567px;
  height: 84px;
  margin-top: 66px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  span {
    width: 32px;
    height: 32px;
  }
`
export const IconShopping = styled.div`
  margin-right: 12px;
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const IconTimer = styled.div`
  margin-right: 12px;
  margin-left: 40px;
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme['yellow-normal']};
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const IconPackeage = styled.div`
  margin-right: 12px;
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme['base-text']};
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const IconCoffee = styled.div`
  margin-right: 12px;
  margin-left: 36px;
  width: 32px;
  height: 32px;
  background: ${(props) => props.theme['purple-normal']};
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FirstLine = styled.div`
  display: flex;
  width: 576px;
  justify-content: start;
`
export const SecondLine = styled.div`
  display: flex;
`
