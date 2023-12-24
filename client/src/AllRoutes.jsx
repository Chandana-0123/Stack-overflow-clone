import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Question from './Pages/Question/Question'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import DisplayQuestion from './Pages/Question/DisplayQuestion'
import Tags from './Pages/Tags/Tags'
import Users from './Pages/Users/Users'
import UserProfile from './Pages/UserProfile/UserProfile'
import Discussion from './Pages/Discussion/Discussion'
import PasswordReset from './Pages/Auth/PasswordReset'
import VideoPlayer from './Pages/Videoplayer/VideoPlayer'
import Chatbot from './Pages/Chatbot/Chatbot'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const AllRoutes = () => {
  return (
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/Auth" element={<Auth />}/>
        <Route path="/Question" element={<Question />}/>
        <Route path="/AskQuestion" element={<AskQuestion />}/>
        <Route path="/Questions/:id" element={<DisplayQuestion />}/>
        <Route path="/Tags" element={<Tags />}/>
        <Route path="/Users" element={<Users />}/>
        <Route path="/Users/:id" element={<UserProfile />}/>   
        <Route path="/Discussion" element={<Discussion />}/> 
        <Route path="/password-reset" element={<PasswordReset />}/> 
        <Route path="/Video-Player" element={<VideoPlayer />} />
        <Route path="/Chatbot" element={<Chatbot />} />
    </Routes>
  )
}

export default AllRoutes