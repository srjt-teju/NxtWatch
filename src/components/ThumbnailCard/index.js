import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../Context/ThemeContext'
import {Para, CustomPara} from './styledComponents'
import './index.css'

const ThumbnailCard = props => (
  <ThemeContext.Consumer>
    {value => {
      const {videoDetails} = props
      const {
        id,
        title,
        channel,
        thumbnailUrl,
        viewCount,
        publishedAt,
      } = videoDetails
      const {name, profileImageUrl} = channel
      const {isDark} = value
      return (
        <Link to={`/videos/${id}`}>
          <li className="card-item">
            <img
              src={thumbnailUrl}
              alt="video thumbnail"
              className="thumbnail"
            />
            <div className="logo-details">
              <img
                src={profileImageUrl}
                alt="channel logo"
                className="card-logo"
              />
              <div className="card-details">
                <Para isDark={isDark}>{title}</Para>
                <CustomPara isDark={isDark}>{name}</CustomPara>
                <CustomPara isDark={isDark}>
                  {viewCount} views .{' '}
                  {formatDistanceToNow(new Date(publishedAt))}
                </CustomPara>
              </div>
            </div>
          </li>
        </Link>
      )
    }}
  </ThemeContext.Consumer>
)

export default ThumbnailCard
