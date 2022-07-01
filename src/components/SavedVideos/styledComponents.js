import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.toggle ? '#0f0f0f' : '#f9f9f9')};
`

export const BottomContainer = styled.div`
  display: flex;
  width: 85vw;
  height: 150vh;

  @media (max-width: 576px) {
    height: 100vh;
    width: 100vw;
  }
`
export const HomeVideoContainer = styled.div`
  background-color: ${props => (props.toggle ? '#212121' : '#f4f4f4')};
  width: 85vw;
  display: flex;
  flex-direction: column;

  @media (max-width: 576px) {
    width: 100vw;
  }
`

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: 200px;
  align-self: flex-start;
`

export const NFpara = styled.p`
  color: ${props => (props.toggle ? '#ffffff' : '#212121')};
  font-size: 18px;
`

export const EachVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;
  height: 780px;
`
export const OopsContainer = styled.div`
  text-align: center;

  @media (max-width: 576px) {
    width: 100vw;
  }
`

export const HeaderContainer = styled.div`
  background-color: ${props => (props.toggle ? '#212121' : '##cccccc')};
  display: flex;
  align-items: center;
  padding: 40px;
  @media (max-width: 576px) {
    height: 10vh;
    width: 100vw;
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
    padding: 20px;
  }
`

export const Heading = styled.h1`
  color: ${props => (props.toggle ? '#ffffff' : '#000000')};
  margin-left: 10px;
`

export const VideoContainer = styled.div`
  display: flex;
  width: 90%;
  padding-top: 20px;
  margin-left: 20px;
  @media (max-width: 576px) {
    margin-left: 8px;
  }
`

export const ChannelTitle = styled.div`
  display: flex;
`

export const Name = styled.h1`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 25px;
  font-weight: 500;
  font-family: Roboto;
  @media (max-width: 576px) {
    font-size: 18px;
  }
`

export const Title = styled.p`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 22px;
  font-weight: 500;
  font-family: roboto;
  @media (max-width: 576px) {
    font-size: 14px;
  }
`

export const TheoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 12px;
`

export const ViewsCount = styled.p`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
`
export const ViewTime = styled.div`
  display: flex;
  align-items: center;
`
