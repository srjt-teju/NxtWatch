import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {MdClose} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'

import ThumbnailCard from '../ThumbnailCard/index'
import ThemeContext from '../../Context/ThemeContext'
import {
  BannerCon,
  HomeCon,
  SearchCon,
  Input,
  SearchBtn,
  FailCon,
  Heading,
  Para,
  CustomButton,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  failure: 'FAILURE',
  success: 'SUCCESS',
  loading: 'LOADING',
}

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    toShowBanner: true,
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        videosList: fetchedData.videos.map(video => ({
          id: video.id,
          channel: {
            name: video.channel.name,
            profileImageUrl: video.channel.profile_image_url,
          },
          publishedAt: video.published_at,
          thumbnailUrl: video.thumbnail_url,
          title: video.title,
          viewCount: video.view_count,
        })),
        total: fetchedData.total,
      }
      this.setState({
        videosList: updatedData.videosList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickCloseBanner = () => {
    this.setState({toShowBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderBanner = () => (
    <BannerCon data-testid="banner">
      <div className="banner-details-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
          className="banner-logo"
        />
        <p className="banner-text">
          Buy Nxt Watch Premium prepaid plans with UPI
        </p>
        <button className="get-it-now-btn" type="button">
          GET IT NOW
        </button>
      </div>
      <button
        type="button"
        className="transparent-btn"
        data-testid="close"
        onClick={this.onClickCloseBanner}
      >
        <MdClose className="close-icon" />
      </button>
    </BannerCon>
  )

  onClickSearchBtn = () => {
    this.getVideos()
  }

  renderSearch = isDark => {
    const {searchInput} = this.state
    return (
      <SearchCon>
        <Input
          isDark={isDark}
          type="search"
          value={searchInput}
          placeholder="Search"
          onChange={this.onChangeSearchInput}
        />
        <SearchBtn
          data-testid="searchButton"
          onClick={this.onClickSearchBtn}
          isDark={isDark}
          type="button"
        >
          <AiOutlineSearch className="close-icon" />
        </SearchBtn>
      </SearchCon>
    )
  }

  onClickRetry = () => {
    this.getVideos()
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

  renderNoResultsView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailCon isDark={isDark}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
              className="failure-img"
            />
            <Heading isDark={isDark}>No Search results found</Heading>
            <Para isDark={isDark}>
              Try different key words or remove search filter
            </Para>
            <CustomButton onClick={this.onClickRetry} type="button">
              Retry
            </CustomButton>
          </FailCon>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderVideos = () => {
    const {videosList} = this.state
    return (
      <ul className="videos-list">
        {videosList.map(video => (
          <ThumbnailCard videoDetails={video} key={video.id} />
        ))}
      </ul>
    )
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    console.log(videosList.length)
    if (videosList.length === 0) {
      return this.renderNoResultsView()
    }
    return this.renderVideos()
  }

  render() {
    const {apiStatus, toShowBanner} = this.state
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
            <HomeCon data-testid="home" isDark={isDark}>
              {toShowBanner && this.renderBanner()}
              {this.renderSearch(isDark)}
              {result}
            </HomeCon>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
