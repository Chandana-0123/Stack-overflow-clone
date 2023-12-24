import React from 'react'

import '../../App.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import Navbar from '../../components/Navbar/Navbar'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Home = () => {
  return (
    <div>
     <Navbar />
      <div className="home-container-1">
        <LeftSidebar />
        <div className="home-container-2">
          <HomeMainbar />
          <RightSidebar />
        </div>
      </div>
    </div>
  )
}

export default Home