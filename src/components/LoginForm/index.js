import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ToggleTheme from '../../context/ToggleTheme'
import {
  MainformContainer,
  FormContainer,
  LogoImg,
  LabelItem,
  InputItem,
  LoginBtn,
  CheckBoxContainer,
  Notice,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    isShowPassword: false,
    isLoginFailed: false,
    ErrorMsg: '',
  }

  OnSubmitForm = async e => {
    e.preventDefault()

    const {username, password} = this.state
    const UserDetails = {username, password}
    const options = {method: 'POST', body: JSON.stringify(UserDetails)}
    const response = await fetch('https://apis.ccbp.in/login', options)
    const data = await response.json()
    if (response.ok) {
      const {history} = this.props
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      this.setState(prevState => ({
        isLoginFailed: !prevState.isLoginFailed,
        ErrorMsg: data.error_msg,
      }))
    }
  }

  ChangeUsername = e => {
    this.setState({username: e.target.value})
  }

  ChangePassword = e => {
    this.setState({password: e.target.value})
  }

  toggleCheckBox = () => {
    this.setState(prevState => ({isShowPassword: !prevState.isShowPassword}))
  }

  render() {
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ToggleTheme.Consumer>
        {value => {
          const {isDarkTheme} = value
          console.log(isDarkTheme)
          const {
            username,
            password,
            isShowPassword,
            isLoginFailed,
            ErrorMsg,
          } = this.state
          const LogoList = [
            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png',

            'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png',
          ]
          const TogglePassword = isShowPassword ? 'text' : 'password'
          return (
            <MainformContainer toggle={isDarkTheme}>
              <FormContainer onSubmit={this.OnSubmitForm} toggle={isDarkTheme}>
                <LogoImg
                  src={isDarkTheme ? LogoList[1] : LogoList[0]}
                  alt="website logo"
                />
                <LabelItem htmlFor="Username">USERNAME</LabelItem>
                <InputItem
                  type="text"
                  value={username}
                  id="Username"
                  placeholder="Username"
                  onChange={this.ChangeUsername}
                />
                <LabelItem htmlFor="Password">PASSWORD</LabelItem>
                <InputItem
                  type={TogglePassword}
                  value={password}
                  id="Password"
                  placeholder="Password"
                  onChange={this.ChangePassword}
                />
                <CheckBoxContainer>
                  <input
                    type="checkbox"
                    id="CheckBox"
                    onChange={this.toggleCheckBox}
                    margin-right="8px"
                    outline="none"
                  />

                  <LabelItem htmlFor="CheckBox" MaiCheckboxHU>
                    Show Password
                  </LabelItem>
                </CheckBoxContainer>
                <LoginBtn type="submit">Login</LoginBtn>
                {isLoginFailed ? <Notice>*{ErrorMsg}</Notice> : null}
              </FormContainer>
            </MainformContainer>
          )
        }}
      </ToggleTheme.Consumer>
    )
  }
}

export default LoginForm
