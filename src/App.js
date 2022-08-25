import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from './Context/ThemeContext'

import Header from './components/Header'
import SideBar from './components/SideBar'
import Login from './components/Login/index'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import SavedVideos from './components/SavedVideos'
import './App.css'

// Replace your code her
class App extends Component {
  state = {isDark: false, savedVideosList: []}

  changeTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  addToSavedList = video => {
    const {savedVideosList} = this.state
    if (savedVideosList.length > 0) {
      const updatedList = savedVideosList.filter(each => each.id !== video.id)
      console.log(updatedList)
      this.setState(prev => ({
        savedVideosList: [...updatedList, video],
      }))
    } else {
      this.setState(prev => ({
        savedVideosList: [...prev.savedVideosList, video],
      }))
    }
  }

  render() {
    const {isDark, savedVideosList} = this.state
    const bgColor = isDark ? 'dark' : 'light'
    return (
      <ThemeContext.Provider
        value={{
          savedVideosList,
          isDark,
          changeTheme: this.changeTheme,
          addToSavedList: this.addToSavedList,
        }}
      >
        <div className={`${bgColor} main-con`}>
          <Switch>
            <Route exact path="/login" component={Login} />
            <>
              <Header />
              <div className="side-bar-main-con">
                <SideBar />
                <Switch>
                  <ProtectedRoute exact path="/" component={Home} />
                  <ProtectedRoute exact path="/trending" component={Trending} />
                  <ProtectedRoute exact path="/gaming" component={Gaming} />
                  <ProtectedRoute
                    exact
                    path="/saved-videos"
                    component={SavedVideos}
                  />
                  <ProtectedRoute
                    exact
                    path="/videos/:id"
                    component={VideoItemDetails}
                  />
                  <NotFound exact path="/not-found" component={NotFound} />
                  <Redirect to="/not-found" />
                </Switch>
              </div>
            </>
          </Switch>
        </div>
      </ThemeContext.Provider>
    )
  }
}

export default App
