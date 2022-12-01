import React from 'react'
import SidebarLeft from './SidebarLeft'
import MiddleFeed from './MiddleFeed'
import MainRight from './MainRight'

const MainBody = () => {
  return (
     <div className="main__body">
    <SidebarLeft/>
    <MiddleFeed/>
    <MainRight/>
     </div>
  )
}

export default MainBody