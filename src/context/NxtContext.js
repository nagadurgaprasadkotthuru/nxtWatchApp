import React from 'react'

const NxtContext = React.createContext({
  isShowBanner: true,
  onClickIsShowBanner: () => {},
})

export default NxtContext
