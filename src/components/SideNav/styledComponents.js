import styled from 'styled-components'

export const SideContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px;
  width: 18%;
  height: 150vh;
  list-style-type: none;
  background-color: ${props => (props.toggle ? '#0f0f0f' : '#ffffff')};
  @media (max-width: 576px) {
    width: 100%;
    height: 10vh;
  }
`

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-left: 15px;
  color: '#94a3b8';
  :hover {
    color: red;
    background-color: ${props => (props.toggle ? '#94a3b8' : ' #e2e8f0')};
  }
  @media (max-width: 576px) {
    padding-left: 5px;
    border: 1px solid ${props => (props.toggle ? 'white' : 'black')};
    border-radius: 15px;
  }
`

export const ItemPara = styled.p`
  color: #475569;
  font-family: roboto;
  font-size: 15px;
  font-weight: 500;
  margin-left: 10px;
  @media (max-width: 576px) {
    font-size: 8px;
  }
`
export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 576px) {
    display: none;
  }
`

export const ContactPara = styled.p`
  color: #909090;
  font-size: 19px;
  font-family: Roboto;
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: 9px;
  }
`
export const SocialLogos = styled.div`
  display: flex;
  justify-content: space-between;
  //   margin-right: 10px;
`
