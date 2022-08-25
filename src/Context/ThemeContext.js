import React from 'react'

const ThemeContext = React.createContext({
  isDark: true,
  savedVideosList: [],
  changeTheme: () => {},
  addToSavedList: () => {},
})

export default ThemeContext
