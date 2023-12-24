import React, {useState} from 'react'
//import ChatBot from 'react-simple-chatbot'
//import { Segment } from 'semantic-ui-react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Chatbotbody from './Chatbotbody'
import Form from './Form'
import './Chatbot.css'

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false) 
    const [isVerified, setIsVerified] = useState(false) 

  return (
    <div className='home-container'>
        <LeftSidebar/>
        {isOpen ? (
          <Chatbotbody
            setIsOpen={setIsOpen}
            isVerified={isVerified}
            setIsVerified={setIsVerified}
          />
        )
          : <button
              className="chatbot"
              onClick={() => setIsOpen((prev) => !prev)}>
            Have Doubts? Click here!
          </button>}
        <Form />
    </div>
  )
}

export default Chatbot