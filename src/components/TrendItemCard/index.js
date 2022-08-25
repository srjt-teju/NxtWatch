import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../Context/ThemeContext'
import {Para, CustomPara} from './styledComponents'
import './index.css'

const TrendItemCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const {trendingVideoDetails} = props
      const {
        id,
        title,
        channel,
        thumbnailUrl,
        viewCount,
        publishedAt,
      } = trendingVideoDetails
      const {name, profileImageUrl} = channel
      return (
        <Link to={`/videos/${id}`}>
          <li className="trend-item">
            <div className="trend-thumbnail-con">
              <img
                src={thumbnailUrl}
                alt="video thumbnail"
                className="trend-thumbnail"
              />
            </div>
            <div className="trend-details">
              <Para isDark={isDark}>{title}</Para>
              <CustomPara isDark={isDark}>{name}</CustomPara>
              <CustomPara isDark={isDark}>
                {viewCount} views . {formatDistanceToNow(new Date(publishedAt))}
              </CustomPara>
            </div>
          </li>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default TrendItemCard
