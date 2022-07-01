import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: ${props => (props.toggle ? '#0f0f0f' : '#f9f9f9')};
`
export const playerContainer = styled.div`
  width: 100vw;
  border: 5px solid yellow;
`

export const BottomContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 150vh;
`
export const HomeVideoContainer = styled.div`
  background-color: ${props => (props.toggle ? '#212121' : '#f4f4f4')};
  width: 85vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 18px;
  @media (max-width: 576px) {
    width: 100vw;
  }
`
export const Heading = styled.p`
  color: ${props => (props.toggle ? '#f4f4f4' : '#212121')};
  font-family: roboto;
  font-size: ${props => (props.para ? '15px' : '25px')};
  font-weight: 500;
  @media (max-width: 576px) {
    font-size: ${props => (props.para ? '12px' : '16px')};
    width: ${props => (props.titleHead ? '90%' : null)};
  }
`
export const ViewandBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`

export const ViewContainer = styled.div`
  display: flex;
  align-items: center;
`
export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 120px;
`
export const LogoImg = styled.img.attrs(props => ({src: props.src}))``

export const LikeContainer = styled.div`
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  //   color: ${props => (props.toggle ? '#f4f4f4' : '#212121')};
`

export const PNSContainer = styled.div`
  display: flex;
  align-self: flex-start;
  color: ${props => (props.toggle ? '#f4f4f4' : '#212121')};
  margin-left: 7%;
`
export const NSContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
`

export const LikeBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => (props.liked ? '#2563eb ' : '#64748b')};
`
