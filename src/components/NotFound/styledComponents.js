import styled from 'styled-components'

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: 450px;
`
export const NFcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.toggle ? '#212121' : '#ffffff')};
  width: 85vw;
  height: 150vh;
`
export const NFheading = styled.h1`
  color: ${props => (props.toggle ? '#ffffff' : '#212121')};
  font-size: 28px;
`
export const NFpara = styled.p`
  color: ${props => (props.toggle ? '#ffffff' : '#212121')};
  font-size: 18px;
`
