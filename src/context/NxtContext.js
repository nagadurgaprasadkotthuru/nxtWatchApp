import React from 'react'

const NxtContext = React.createContext({
  activeTab: 1,
  theme: 'true',
  isShowNavigationItems: false,
  savedList: [],
  onClickIsShowNavigationItems: () => {},
  onChangeTheme: () => {},
  onChangeActiveTab: () => {},
  onSaveVideo: () => {},
})

export default NxtContext
