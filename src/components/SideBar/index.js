import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import ThemeContext from '../../Context/ThemeContext'
import {SideBarCon, SideBarItem, Para, ContactPara} from './styledComponents'
import './index.css'

class SideBar extends Component {
  state = {activeId: ''}

  replaceActiveId = id => {
    this.setState({activeId: id})
  }

  renderHome = (isDark, id) => {
    const {activeId} = this.state
    const activeClassIcon = id === activeId && 'active'
    const onClickActiveId = () => {
      this.replaceActiveId(id)
    }
    return (
      <Link to="/">
        <SideBarItem
          onClick={onClickActiveId}
          isDark={isDark}
          active={activeId === id}
        >
          <AiFillHome className={`side-bar-icon ${activeClassIcon}`} />
          <Para isDark={isDark} active={activeId === id}>
            Home
          </Para>
        </SideBarItem>
      </Link>
    )
  }

  renderTrending = (isDark, id) => {
    const {activeId} = this.state
    const activeClassIcon = id === activeId && 'active'
    const onClickActiveId = () => {
      this.replaceActiveId(id)
    }
    return (
      <Link to="/trending">
        <SideBarItem
          onClick={onClickActiveId}
          isDark={isDark}
          active={activeId === id}
        >
          <HiFire className={`side-bar-icon ${activeClassIcon}`} />

          <Para isDark={isDark} active={activeId === id}>
            Trending
          </Para>
        </SideBarItem>
      </Link>
    )
  }

  renderGaming = (isDark, id) => {
    const {activeId} = this.state
    const activeClassIcon = id === activeId && 'active'
    const onClickActiveId = () => {
      this.replaceActiveId(id)
    }
    return (
      <Link to="/gaming">
        <SideBarItem
          onClick={onClickActiveId}
          isDark={isDark}
          active={activeId === id}
        >
          <SiYoutubegaming className={`side-bar-icon ${activeClassIcon}`} />
          <Para isDark={isDark} active={activeId === id}>
            Gaming
          </Para>
        </SideBarItem>
      </Link>
    )
  }

  renderSavedVideos = (isDark, id) => {
    const {activeId} = this.state
    const activeClassIcon = id === activeId && 'active'
    const onClickActiveId = () => {
      this.replaceActiveId(id)
    }
    return (
      <Link to="/saved-videos">
        <SideBarItem
          onClick={onClickActiveId}
          isDark={isDark}
          active={activeId === id}
        >
          <MdPlaylistAdd className={`side-bar-icon ${activeClassIcon}`} />
          <Para isDark={isDark} active={activeId === id}>
            Saved videos
          </Para>
        </SideBarItem>
      </Link>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SideBarCon isDark={isDark}>
              <ul className="side-bar-list">
                {this.renderHome(isDark, 'HOME')}
                {this.renderTrending(isDark, 'TRENDING')}
                {this.renderGaming(isDark, 'GAMING')}
                {this.renderSavedVideos(isDark, 'SAVED-VIDEOS')}
              </ul>
              <div className="contact-con">
                <ContactPara isDark={isDark}>CONTACT US</ContactPara>
                <ul className="side-bar-logos-con">
                  <li>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                      alt="facebook logo"
                      className="side-bar-logo"
                    />
                  </li>
                  <li>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                      alt="twitter logo"
                      className="side-bar-logo"
                    />
                  </li>
                  <li>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                      alt="linked in logo"
                      className="side-bar-logo"
                    />
                  </li>
                </ul>
                <ContactPara isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactPara>
              </div>
            </SideBarCon>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideBar
