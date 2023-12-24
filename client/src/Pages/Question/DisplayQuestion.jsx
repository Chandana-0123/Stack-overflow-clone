import React from 'react'
import '../../App.css'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import QuestionDetails from './QuestionDetails'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <RightSidebar />
        <QuestionDetails />
      </div>
    </div>
  )
}

export default DisplayQuestion