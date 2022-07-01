import ToggleTheme from '../../context/ToggleTheme'

import {
  OopsContainer,
  LogoImg,
  NFheading,
  NFpara,
  RetryBtn,
} from './styledComponents'

const FetchError = props => {
  const {fail} = props

  const MakeSearch = () => {
    fail()
  }

  const PicList = [
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png',
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png',
  ]
  return (
    <ToggleTheme.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <OopsContainer toggle={isDarkTheme}>
            <LogoImg
              src={isDarkTheme ? PicList[1] : PicList[0]}
              alt="failure view"
            />
            <NFheading toggle={isDarkTheme}>
              Oops! Something Went Wrong
            </NFheading>
            <NFpara toggle={isDarkTheme}>We are having some trouble</NFpara>
            <RetryBtn onClick={MakeSearch}>Retry</RetryBtn>
          </OopsContainer>
        )
      }}
    </ToggleTheme.Consumer>
  )
}

export default FetchError
