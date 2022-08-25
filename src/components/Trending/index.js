import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import TrendItemCard from '../TrendItemCard/index'
import ThemeContext from '../../Context/ThemeContext'

import {
  TrendCon,
  FailCon,
  Heading,
  Para,
  CustomButton,
  Banner,
  Span,
  CustomHead,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  loading: 'LOADING',
}

class Trending extends Component {
  state = {apiStatus: apiStatusConstants.initial, trendingVideosList: []}

  componentDidMount() {
    this.getTrendVideos()
  }

  getTrendVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const url = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        videos: fetchedData.videos.map(video => ({
          channel: {
            name: video.channel.name,
            profileImageUrl: video.channel.profile_image_url,
          },
          id: video.id,
          publishedAt: video.published_at,
          thumbnailUrl: video.thumbnail_url,
          title: video.title,
          viewCount: video.view_count,
        })),
        total: fetchedData.total,
      }
      this.setState({
        trendingVideosList: updatedData.videos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getTrendVideos()
  }

  renderApiFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const activeImg = isDark
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailCon isDark={isDark}>
            <img src={activeImg} alt="failure view" className="failure-img" />
            <Heading isDark={isDark}>Oops! Something Went Wrong</Heading>
            <Para isDark={isDark}>
              We are having some trouble to complete your request.
            </Para>
            <Para isDark={isDark}> Please try again.</Para>
            <CustomButton onClick={this.onClickRetry} type="button">
              Retry
            </CustomButton>
          </FailCon>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color=" #4f46e5" height="50" width="50" />
    </div>
  )

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        const {trendingVideosList} = this.state
        return (
          <>
            <Banner isDark={isDark} data-testid="banner">
              <Span isDark={isDark}>
                <HiFire className="trend-icon" />
              </Span>
              <CustomHead isDark={isDark}>Trending</CustomHead>
            </Banner>
            <ul className="trend-videos-list">
              {trendingVideosList.map(video => (
                <TrendItemCard key={video.id} trendingVideoDetails={video} />
              ))}
            </ul>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )

  render() {
    const {apiStatus} = this.state
    let result
    switch (apiStatus) {
      case apiStatusConstants.loading:
        result = this.renderLoader()
        break
      case apiStatusConstants.failure:
        result = this.renderApiFailureView()
        break
      case apiStatusConstants.success:
        result = this.renderSuccessView()
        break
      default:
        result = null
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendCon isDark={isDark} data-testid="trending">
              {result}
            </TrendCon>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
