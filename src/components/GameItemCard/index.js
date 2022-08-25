import {Link} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'
import {Para, CustomPara} from './styledComponents'
import './index.css'

const GameItemCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const {gamingVideoDetails} = props
      const {id, title, thumbnailUrl, viewCount} = gamingVideoDetails
      return (
        <Link to={`/videos/${id}`}>
          <li className="game-card">
            <img
              src={thumbnailUrl}
              alt="video thumbnail"
              className="game-thumbnail"
            />
            <Para isDark={isDark}>{title}</Para>
            <CustomPara isDark={isDark}>
              {viewCount} Watching Worldwide
            </CustomPara>
          </li>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default GameItemCard
