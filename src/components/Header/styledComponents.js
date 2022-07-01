import styled from 'styled-components'

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: 40px;
  @media (max-width: 576px) {
    width: 100px;
    height: 30px;
  }
`

export const HeaderContainer = styled.nav`
  background-color: ${props => (props.toggle ? '#0f0f0f' : ' #ffffff')};
  display: flex;
  justify-content: space-between;
  padding: 12px;
  //   @media (max-width: 576px) {
  //     box-shadow: 3px 0px 3px grey;
  //   }
`
export const SettingContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 18%;
  background-color: transparent;
  border: 0px;
  @media (max-width: 576px) {
    width: 50%;
  }
`
export const LogOutBtn = styled.button`
  color: ${props => (props.toggle ? '#ffffff' : '#3b82f6')};
  border: 1px solid ${props => (props.toggle ? '#ffffff' : '#3b82f6')};
  outline: none;
  background-color: transparent;
  padding: 5px;
  @media (max-width: 576px) {
  }
`
export const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 38vh;
  border-radius: 5px;

  @media (max-width: 576px) {
    height: 20vh;
  }
  background-color: ${props => (props.toggle ? '#0f0f0f' : ' #ffffff')};
`

export const noticepara = styled.p`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-weight: '500';
  font-size: '22px';
`

export const confirmSentence = styled.p`
  color: #00306e;
  font-size: 25px;
  font-family: roboto;
  font-weight: 500;
`

export const CancelBtn = styled.button`
  border: 1px solid #3b82f6;
  padding: 5px;
  color: #3b82f6;
  border-radius: 3px;
  background-color: transparent;
  @media (max-width: 576px) {
    padding: 2px;
    font-size: 8px;
  }
`
export const ConfirmBtn = styled.button`
  border: none;
  padding: 5px;
  color: #ffffff;
  border-radius: 3px;
  background-color: #3b82f6;
  @media (max-width: 576px) {
    padding: 3px;
    font-size: 8px;
  }
`
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  //   align-self: stretch;
  width: 20%;
  @media (max-width: 576px) {
    width: 50%;
  }
`
export const ThemeBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: 0px;
`
