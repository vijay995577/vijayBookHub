import styled from 'styled-components'

export const HomeContainer = styled.nav`
  background-color: ${props => (props.toggle ? '#0f0f0f' : '#f9f9f9')};
  width: 85vw;
  @media (max-width: 576px) {
    width: 100vh;
  }
`
export const BottomContainer = styled.div`
  display: flex;
  //   width: 82%;
`
export const HomeVideoContainer = styled.div`
  background-color: ${props => (props.toggle ? '#0f0f0f' : '#f9f9f9')};
  width: 100%;

  display: flex;
  flex-direction: column;
  //   align-items: center;
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`
export const EachVideoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: scroll;

  width: 86%;
  height: 120vh;

  @media (max-width: 576px) {
    width: 100%;
    // justify-content: flex-start;
  }
`

export const HeaderContainer = styled.div`
  background-color: ${props => (props.toggle ? '#212121' : ' #ebebeb')};
  display: flex;
  align-items: center;
  padding: 40px;
  width: 100%;
  @media (max-width: 576px) {
    width: 100%;
    padding: 0px;
  }
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.toggle ? '#424242' : '#94a3b8')};
  border-radius: 80px;
  padding: 40px;
  @media (max-width: 576px) {
    padding: 15px;
  }
`

export const Heading = styled.h1`
  color: ${props => (props.toggle ? '#ffffff' : '#000000')};
  margin-left: 10px;
`
