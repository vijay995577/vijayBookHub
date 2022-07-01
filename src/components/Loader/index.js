import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {LoaderEl} from './styledComponents'
import ToggleTheme from '../../context/ToggleTheme'

const LoaderComponent = () => (
  <ToggleTheme.Consumer>
    {value => {
      const {isDarkTheme} = value
      const LoaderColor = isDarkTheme ? '#ffffff' : ' #3b82f6'
      return (
        <LoaderEl data-testid="loader">
          <Loader type="ThreeDots" color={LoaderColor} height="50" width="50" />
        </LoaderEl>
      )
    }}
  </ToggleTheme.Consumer>
)

export default LoaderComponent
