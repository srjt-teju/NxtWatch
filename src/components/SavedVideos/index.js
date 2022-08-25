import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../Context/ThemeContext'
import {
  SavedCon,
  FailCon,
  Heading,
  Para,
  Banner,
  Span,
  CustomHead,
} from './styledComponents'
import './index.css'
import TrendItemCard from '../TrendItemCard'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, savedVideosList} = value
      return (
        <SavedCon isDark={isDark} data-testid="savedVideos">
          {savedVideosList.length > 0 ? (
            <>
              <Banner isDark={isDark} data-testid="banner">
                <Span isDark={isDark}>
                  <HiFire className="trend-icon" />
                </Span>
                <CustomHead isDark={isDark}>Saved Videos</CustomHead>
              </Banner>
              <ul className="saved-videos-list">
                {savedVideosList.map(video => (
                  <TrendItemCard trendingVideoDetails={video} key={video.id} />
                ))}
              </ul>
            </>
          ) : (
            <FailCon isDark={isDark}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
                className="no-saved-img"
              />
              <Heading isDark={isDark}>No saved videos found</Heading>
              <Para isDark={isDark}>
                You can save your videos while watching them
              </Para>
            </FailCon>
          )}
        </SavedCon>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
