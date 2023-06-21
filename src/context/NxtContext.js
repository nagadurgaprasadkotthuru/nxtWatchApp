import React from 'react'

const NxtContext = React.createContext({
  isShowBanner: true,
  isShowNavigationItems: false,
  onClickIsShowBanner: () => {},
  onClickIsShowNavigationItems: () => {},
})

export default NxtContext
