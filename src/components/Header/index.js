import './index.css'
import {RiMoonFill, RiSunLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import ToggleTheme from '../../context/ToggleTheme'

import {
  LogoImg,
  HeaderContainer,
  SettingContainer,
  LogOutBtn,
  PopUpContainer,
  CancelBtn,
  ConfirmBtn,
  BtnContainer,
  ThemeBtn,
} from './styledComponents'

const Header = props => {
  const {ChangeTheme} = props
  const ChangeMode = () => {
    ChangeTheme()
  }
  const RemoveUser = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ToggleTheme.Consumer>
      {value => {
        const LogoList = [
          'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',

          'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
        ]
        const {isDarkTheme} = value
        console.log(isDarkTheme)

        return (
          <HeaderContainer toggle={isDarkTheme}>
            <Link to="/">
              <LogoImg
                src={isDarkTheme ? LogoList[1] : LogoList[0]}
                alt="website logo"
              />
            </Link>
            <SettingContainer>
              {isDarkTheme ? (
                <ThemeBtn data-testid="theme" onClick={ChangeMode}>
                  <RiSunLine color="#ffffff" font-size="25px" />
                </ThemeBtn>
              ) : (
                <ThemeBtn data-testid="theme" onClick={ChangeMode}>
                  <RiMoonFill font-size="25px" />
                </ThemeBtn>
              )}
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                height="40px"
                width="40px"
              />

              <Popup
                modal
                trigger={
                  <LogOutBtn type="button" toggle={isDarkTheme}>
                    Logout
                  </LogOutBtn>
                }
              >
                {close => (
                  <PopUpContainer toggle={isDarkTheme}>
                    <p
                      className="notice_para"
                      style={{
                        color: isDarkTheme ? '#ffffff' : '#000000',
                      }}
                    >
                      Are you sure, you want to logout
                    </p>
                    <BtnContainer>
                      <CancelBtn type="button" onClick={() => close()}>
                        Cancel
                      </CancelBtn>
                      <ConfirmBtn type="button" onClick={RemoveUser}>
                        Confirm
                      </ConfirmBtn>
                    </BtnContainer>
                  </PopUpContainer>
                )}
              </Popup>
            </SettingContainer>
          </HeaderContainer>
        )
      }}
    </ToggleTheme.Consumer>
  )
}
export default withRouter(Header)
