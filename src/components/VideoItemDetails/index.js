import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import ThemeContext from '../../Context/ThemeContext'

import {
  IconCon,
  Break,
  CustomPara,
  CustomCon,
  VideoCon,
  FailCon,
  Heading,
  Head,
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

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    liked: false,
    disliked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = {
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
        },
        description: fetchedData.video_details.description,
        id: fetchedData.video_details.id,
        publishedAt: fetchedData.video_details.published_at,
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        title: fetchedData.video_details.title,
        videoUrl: fetchedData.video_details.video_url,
        viewCount: fetchedData.video_details.view_count,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getVideoDetails()
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
            <Head isDark={isDark}>Oops! Something Went Wrong</Head>
            <Para isDark={isDark}>
              We are having some trouble to complete your request. Please try
              again.
            </Para>
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

  onClickLike = () => {
    this.setState({liked: true, disliked: false})
  }

  onClickDislike = () => {
    this.setState({liked: false, disliked: true})
  }

  renderSuccessView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {videoDetails, liked, disliked, isSaved} = this.state
        const {
          description,
          publishedAt,
          title,
          id,
          thumbnailUrl,
          videoUrl,
          viewCount,
          channel,
        } = videoDetails
        const {name, profileImageUrl, subscriberCount} = channel
        const {isDark, addToSavedList} = value
        const onClickSave = () => {
          this.setState(
            prev => ({isSaved: !prev.isSaved}),
            addToSavedList(videoDetails),
          )
        }

        return (
          <div className="video-details-con">
            <div className="video-container">
              <ReactPlayer url={videoUrl} width="100%" height="80vh" controls />
            </div>
            <div className="video-text-con">
              <Heading isDark={isDark}>{title}</Heading>
              <div className="date-like-con">
                <Para isDark={isDark}>
                  {viewCount} views .{' '}
                  {formatDistanceToNow(new Date(publishedAt))}
                </Para>
                <div className="icons-con">
                  <IconCon isDark={isDark} isActive={liked}>
                    <BiLike className="like-icon" />
                    <CustomCon
                      onClick={this.onClickLike}
                      isActive={liked}
                      isDark={isDark}
                    >
                      Like
                    </CustomCon>
                  </IconCon>
                  <IconCon isDark={isDark} isActive={disliked}>
                    <BiDislike className="like-icon" />
                    <CustomCon
                      onClick={this.onClickDislike}
                      isActive={disliked}
                      isDark={isDark}
                    >
                      Dislike
                    </CustomCon>
                  </IconCon>

                  <IconCon isDark={isDark} isActive={isSaved}>
                    <MdPlaylistAdd className="like-icon" />
                    <CustomCon
                      onClick={onClickSave}
                      isActive={isSaved}
                      isDark={isDark}
                    >
                      {isSaved ? 'Saved' : 'Save'}
                    </CustomCon>
                  </IconCon>
                </div>
              </div>
              <Break isDark={isDark} />
              <div className="channel-details-con">
                <img
                  src={profileImageUrl}
                  alt="channel logo"
                  className="channel-logo"
                />
                <div className="channel-text-con">
                  <Heading isDark={isDark}>{name}</Heading>
                  <Para isDark={isDark}>{subscriberCount} subscibers</Para>
                  <CustomPara isDark={isDark}>{description}</CustomPara>
                </div>
              </div>
            </div>
          </div>
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
            <VideoCon isDark={isDark} data-testid="videoItemDetails">
              {result}
            </VideoCon>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoItemDetails
