import React from 'react'

const NxtContext = React.createContext({
  theme: false,
  isShowNavigationItems: false,
  onClickIsShowNavigationItems: () => {},
  onChangeTheme: () => {},
})

export default NxtContext
