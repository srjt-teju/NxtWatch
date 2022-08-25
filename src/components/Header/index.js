import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
import {
  PopupBtn,
  Navbar,
  HeaderCon,
  OutlineButton,
  CustomButton,
} from './styledComponents'

import ThemeContext from '../../Context/ThemeContext'
import './index.css'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, changeTheme} = value
      const activeLogo = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const activeThemeIcon = isDark ? (
        <BsBrightnessHigh className="light-icon" />
      ) : (
        <FaMoon className="moon-icon" />
      )
      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }
      return (
        <Navbar isDark={isDark}>
          <HeaderCon>
            <Link to="/">
              <img
                src={activeLogo}
                alt="website logo"
                className="header-logo"
              />
            </Link>
            <div className="header-icons-con">
              <button
                type="button"
                onClick={changeTheme}
                className="transparent-btn"
                data-testid="theme"
              >
                {activeThemeIcon}
              </button>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                className="profile-img"
              />

              <Popup
                modal
                trigger={
                  <OutlineButton isDark={isDark} type="button">
                    Logout
                  </OutlineButton>
                }
              >
                {close => (
                  <PopupBtn isDark={isDark}>
                    <div>
                      <p className="popup-text">
                        Are you sure, you want to logout
                      </p>
                    </div>
                    <CustomButton type="button" out onClick={() => close()}>
                      Cancel
                    </CustomButton>
                    <CustomButton type="button" onClick={onClickLogout}>
                      Confirm
                    </CustomButton>
                  </PopupBtn>
                )}
              </Popup>
            </div>
          </HeaderCon>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
