import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import ChatBot from 'react-simple-chatbot'
import { Segment } from 'semantic-ui-react'

import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import './Discussion.css'

const Discussion = () => {
  
  const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()

  const checkAuth = () => {
      if(User === null){
        alert("Login or Signup to Chat.....")
        navigate("/Auth")
      }
  }

    const steps =[
      {
          id:'Greet',
          message:'Hello, Hii',
          trigger:'Ask Name'
      },{
          id:'Ask Name',
          user:true,
          trigger:'Waiting1'
      },{
          id:'Waiting1',
          user:true,
          trigger:'Name'
      },{
          id:'Name',
          message:'What s your name',
          trigger:'Waiting-2'
      },{
        id:'Waiting-2',
        user:true,
        trigger:'Query'
      },{
          id:'Query',
          message:'Any Questions related to programming?',
          trigger:'Select'
      },{
          id:'Select',
          user:true,
          trigger:'Issues'
      },{
          id:'Issues',
          options:[{value:'javascript',label:"javascript",trigger:"javascript"},
          {value:'php',label:"php",trigger:"php"}]
      },{
          id:'javascript',
          message:'https://youtu.be/LO5eTH4Pe8E?si=1sK3lcRP7OH3PPo_',
          trigger:'details'
      },{
          id:'php',
          message:'https://youtu.be/OK_JCtrrv-c?si=dqT4XenwiEHeB3cA',
          trigger:'details'
      },{
          id:'details',
          user:true,
          trigger:'details-1'
      },{
          id:'details-1',
          message:'U can watch these videos',
          trigger:'details-2'
      },{
          id:'details-2',
          user:true,
          trigger:'details-3'
      },{
          id:'details-3',
          message:'Thank u for chatting, Bye',
          end:true
      }
  ]

  return (
    <div className='home-container'>
      <LeftSidebar />
      <div className='home-container-2'>
        <Segment className="chat-2" floated='right'>
          {
            User ? <ChatBot steps={steps}/> : <button className='btn' onClick={checkAuth}>Want to Chat?</button>
          }
        </Segment>
      </div>
  </div>   
  )
}

export default Discussion