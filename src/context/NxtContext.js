import React from 'react'

const NxtContext = React.createContext({
  theme: 'true',
  isShowNavigationItems: false,
  onClickIsShowNavigationItems: () => {},
  onChangeTheme: () => {},
})

export default NxtContext
