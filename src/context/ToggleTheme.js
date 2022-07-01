import React from 'react'

const ToggleTheme = React.createContext({
  isDarkTheme: false,
  ChangeTheme: () => {},
  SavedVideoList: [],
  onAddVideo: () => {},
  onRemoveVideo: () => {},
})

export default ToggleTheme
