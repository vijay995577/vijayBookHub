import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.toggle ? '#181818' : '#f9f9f9')};
`

export const BottomContainer = styled.div`
  display: flex;
  width: 85vw;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const HomeVideoContainer = styled.div`
  background-color: ${props => (props.toggle ? '#181818' : '#f9f9f9')};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 150vh;
  @media (max-width: 576px) {
  }
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  display: ${props => (props.CancelBanner ? 'flex' : 'none')};
  justify-content: space-between;
  padding: 20px;
  height: 40vh;
  width: 100%;
  @media (max-width: 576px) {
    height: 20vh;
    width: 100%;
    padding: none;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`

export const GetBtn = styled.button`
  align-self: flex-start;
  background-color: transparent;
  padding: 12px;
  @media (max-width: 576px) {
    width: 30%;

    font-size: 8px;
    padding: 6px;
  }
`

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: ${props => (props.maiHuNotFound ? '480px' : '22px')};
  align-self: flex-start;
  @media (max-width: 576px) {
    height: ${props => (props.maiHuNotFound ? '200px' : '22px')};
  }
`

export const AdvertLine = styled.p`
  font-size: 28px;
  width: 75%;
  @media (max-width: 576px) {
    width: 40%;
    font-size: 10px;
  }
`
export const CancelBtn = styled.button`
  background-color: transparent;
  border: 0px;
  align-self: flex-start;
`

export const NFheading = styled.h1`
  color: ${props => (props.toggle ? '#ffffff' : '#212121')};
  font-size: 28px;
`
export const NFpara = styled.p`
  color: ${props => (props.toggle ? '#ffffff' : '#212121')};
  font-size: 18px;
`

export const SearchContainer = styled.div`
  border: 2px solid '#7e858e';
  padding: 10px;
  display: flex;
  align-items: center;
  width: 500px;
  background-color: '#cccccc';
  margin-left: 50px;
  align-self: flex-start;
  @media (max-width: 576px) {
    width: 77%;
  }
`

export const SearchBar = styled.input`
  padding: 5px;
  outline: none;
  width: 100%;

  border: 1px solid #000000;
  color: ${props => (props.toggle ? '#ffffff' : '#000000')};
  background-color: ${props => (props.toggle ? '#475569' : '#ffffff')};
`

export const EachVideoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  overflow-y: scroll;

  @media (max-width: 576px) {
    justify-content: flex-start;
  }
`
export const OopsContainer = styled.div`
  text-align: center;
`

export const RetryBtn = styled.button`
  color: #ffffff;
  font-weight: 500;
  padding: 12px;
  background-color: #4f46e5;
  outline: none;
  border-radius: 8px;
  border: none;
`
export const SearchBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: 0px;
`
