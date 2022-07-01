import styled from 'styled-components'

export const VideoContainer = styled.div`
  list-style-type: none;
  width: 28%;
  margin: 20px;
  :hover {
    box-shadow: 0px 0px 3px 2px grey;
  }

  @media (max-width: 576px) {
    width: 100%;
    // margin-right: 25px;
    margin-bottom: 5px;
    flex-shrink: 1;
    :hover {
      box-shadow: 0px 0px 3px 2px grey;
    }
  }
`

export const LogoImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  height: ${props => (props.ImProfilePic ? '40px' : '170px')};
  width: ${props => (props.ImProfilePic ? null : '100%')};
  margin-top: ${props => (props.ImProfilePic ? '18px' : null)};

  @media (max-width: 576px) {
    height: ${props => (props.ImProfilePic ? '20px' : '160px')};
    width: ${props => (props.ImProfilePic ? '30px' : '100%')};
  }
`
export const ChannelTitle = styled.div`
  display: flex;
`

export const Name = styled.p`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 18px;
  font-weight: 500;
  font-family: Roboto;
  @media (max-width: 576px) {
    font-size: 10px;
  }
`

export const Title = styled.p`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 16px;
  font-weight: 500;
  font-family: Roboto;
  @media (max-width: 576px) {
    font-size: 10px;
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
  font-size: 10px;
  font-weight: 500;
  font-family: Roboto;
`

export const PublishTime = styled.p`
  color: ${props => (props.toggle ? '#d7dfe9' : '#212121')};
  font-size: 12px;
  font-weight: 500;
  font-family: Roboto;
  margin-left: 12px;
  @media (max-width: 576px) {
    font-size: 8px;
  }
`
export const ViewTime = styled.div`
  display: flex;
  align-items: center;
`
