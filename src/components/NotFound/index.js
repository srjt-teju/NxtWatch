import ThemeContext from '../../Context/ThemeContext'
import {NotFoundCon, Heading, Para} from './styledComponents'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const activeImg = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <NotFoundCon isDark={isDark}>
          <img src={activeImg} alt="not found" className="not-found-img" />
          <Heading isDark={isDark}>Page Not Found</Heading>
          <Para isDark={isDark}>
            we are sorry, the page you requested could not be found.
          </Para>
        </NotFoundCon>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
