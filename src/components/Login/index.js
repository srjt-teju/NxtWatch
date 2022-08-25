import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'
import {
  LoginCon,
  Card,
  Label,
  Input,
  Button,
  CheckboxLabel,
} from './styledComponents'
import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    toShowError: false,
    checked: false,
  }

  onClickShowPassword = () => {
    this.setState(prev => ({checked: !prev.checked}))
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onSuccessLogin = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    console.log(errorMsg)
    this.setState({toShowError: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userCredentials = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {method: 'POST', body: JSON.stringify(userCredentials)}
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccessLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  render() {
    const {username, password, checked, errorMsg, toShowError} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          const activeLogo = isDark
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          console.log(activeLogo)
          return (
            <LoginCon isDark={isDark}>
              <Card isDark={isDark}>
                <img src={activeLogo} alt="website logo" className="logo-img" />
                <form className="form" onSubmit={this.onSubmitForm}>
                  <Label isDark={isDark} htmlFor="username">
                    USERNAME
                  </Label>
                  <Input
                    isDark={isDark}
                    type="text"
                    value={username}
                    id="username"
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                  />
                  <div className="input-con">
                    <Label htmlFor="password" isDark={isDark}>
                      PASSWORD
                    </Label>
                    <Input
                      isDark={isDark}
                      type={checked ? 'text' : 'password'}
                      value={password}
                      id="password"
                      placeholder="Password"
                      onChange={this.onChangePassword}
                    />
                  </div>
                  <div className="show-password-con">
                    <input
                      className="input"
                      type="checkbox"
                      id="checkbox"
                      checked={checked}
                      onChange={this.onClickShowPassword}
                    />
                    <CheckboxLabel
                      isDark={isDark}
                      htmlFor="checkbox"
                      className="label"
                    >
                      Show Password
                    </CheckboxLabel>
                  </div>
                  <Button type="submit">Login</Button>
                  {toShowError && <p className="error-msg">*{errorMsg}</p>}
                </form>
              </Card>
            </LoginCon>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
