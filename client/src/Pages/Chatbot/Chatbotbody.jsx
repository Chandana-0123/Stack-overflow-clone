import React from 'react'
import ChatBot from 'react-simple-chatbot'
import { Segment } from 'semantic-ui-react'

const Chatbotbody = () => {

    const steps =[
        {
            id:'Greet',
            message:'Hello, Welcome to our Website',
            trigger:'Ask Name'
        },{
            id:'Ask Name',
            message:'Please Enter your Name',
            trigger:'Waiting1'
        },{
            id:'Waiting1',
            user:true,
            trigger:'Name'
        },{
            id:'Name',
            message:'Hello, {previousValue}, Have any queries',
            trigger:'Queries'
        },{
            id:'Queries',
            user:true,
            trigger:'Select'
        },{
            id:'Select',
            message:'Please select the topic u want to discuss',
            trigger:'Issues'
        },{
            id:'Issues',
            options:[{value:'React',label:"React",trigger:"React"},
            {value:'Angular',label:"Angular",trigger:"Angular"}],
        },{
            id:'React',
            message:'React is a JavaScript library for building user interfaces. It uses a declarative, component-based paradigm and aims to be efficient and flexible.',
            end:true
        },{
            id:'Angular',
            message:'For questions regarding programming in ECMAScript (JavaScript/JS) and its various dialects/implementations (excluding ActionScript). Please include all relevant tags on your question.',
            end:true
        }
    ]

  return (
    <div className='chat'>
        <Segment floated='right'>
            <ChatBot steps={steps} />
        </Segment>
    </div>
  )
}

export default Chatbotbody