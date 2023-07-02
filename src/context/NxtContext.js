import React from 'react'

const NxtContext = React.createContext({
  activeTab: 1,
  theme: 'true',
  isShowNavigationItems: false,
  onClickIsShowNavigationItems: () => {},
  onChangeTheme: () => {},
  onChangeActiveTab: () => {},
})

export default NxtContext
