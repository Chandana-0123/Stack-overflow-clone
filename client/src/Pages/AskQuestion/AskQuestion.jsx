import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import './AskQuestion.css'
import { askQuestion } from '../../actions/question'

import '../../App.css'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState('')
  const [questionBody, setQuestionBody] = useState('')
  const [questionTags, setQuestionTags] = useState('')

  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (User) {
      if (questionTitle && questionBody && questionTags) { 
    //console.log({questionTitle, questionBody, questionTags})
        dispatch(askQuestion({questionTitle, questionBody, questionTags, userPosted: User.result.name, userId: User?.result?._id}, navigate))
        alert('Question posted Successfully')
      } else 
          { alert("Please fill all fields to post a Question") }
    } else { 
      alert("Please Login to post a Question....")
      navigate('/Auth')
    }
  }
  
  const handleEnter = (e) => { 
    if(e.key === 'Enter'){
      setQuestionBody(questionBody + "\n")
    }
  }
    
  return (
    <div >
      <div className='ask-question'>
        <div className='ask-ques-container'>
          <h1>Ask a Public Question</h1>
          <form onSubmit={handleSubmit}>
            <div className='ask-form-container'>
              <label htmlFor="ask-ques-title">
                <h4>Title</h4>
                <p>Be specific and imagine you're asking a question to another person</p>
                <input type="text" id='ask-ques-title' onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder='e.g. is there a R function for finding the index of an element in a vector?' />
              </label>
              <label htmlFor="ask-ques-body">
                <h4>Body</h4>
                <p>Include all the information someone would need to answer your question</p>
                <textarea name="" id="ask-ques-body" onChange={(e) => {setQuestionBody(e.target.value)}} cols="30" rows="10" onKeyDown={handleEnter}></textarea>
              </label>
              <label htmlFor="ask-ques-tags">
                <h4>Tags</h4>
                <p>Be specific and imagine you're asking a question to another person</p>
                <input type="text" id='ask-ques-tags' onChange={(e) => {setQuestionTags(e.target.value.split(" "))}} placeholder='e.g (xml typescript wordpress)' />
              </label>
            </div>
            <p>Once Question asked u cannot delete question</p>
            <input type="submit" value='Review your question' className='review-btn' />
          </form>
        </div> 
      </div>
      </div>
    )
}

export default AskQuestion;