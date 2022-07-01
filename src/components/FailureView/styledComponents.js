import styled from 'styled-components'

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
export const NFheading = styled.h1`
  color: ${props => (props.toggle ? '#ffffff' : '#212121')};
  font-size: 28px;
`
export const NFpara = styled.p`
  color: ${props => (props.toggle ? '#ffffff' : '#212121')};
  font-size: 18px;
`

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: 370px;
  align-self: flex-start;
  @media (max-width: 576px) {
    height: 230px;
  }
`
