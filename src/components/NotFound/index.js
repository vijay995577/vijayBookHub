import ToggleTheme from '../../context/ToggleTheme'
import {LogoImg, NFcontainer, NFheading, NFpara} from './styledComponents'

const NotFound = () => (
  <ToggleTheme.Consumer>
    {value => {
      const {isDarkTheme} = value

      const ImgList = [
        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png',

        'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png',
      ]

      return (
        <NFcontainer toggle={isDarkTheme}>
          <LogoImg
            maiHuNotFound
            src={isDarkTheme ? ImgList[1] : ImgList[0]}
            alt="not found"
          />
          <NFheading toggle={isDarkTheme}>Page Not Found</NFheading>
          <NFpara toggle={isDarkTheme}>
            we are sorry, the page you requested could not be found.
          </NFpara>
        </NFcontainer>
      )
    }}
  </ToggleTheme.Consumer>
)

export default NotFound
