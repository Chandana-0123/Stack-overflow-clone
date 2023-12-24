import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './HomeMainbar.css'
import QuestionList from './QuestionList'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const HomeMainbar = () => {

  const location = useLocation()
  const user = useSelector((state) => (state.currentUserReducer));
  const navigate = useNavigate()

  const questionsList = useSelector(state => state.questionsReducer)
  
  /*console.log(questionsList)
  var questionsList = [{
    id: 1,
    upVotes: 3,
    downVotes: 2,
    noOfAnswers: 2,
    questionTitle: "What is a function?",
    questionBody: "It meant to be",
    questionTags: ["java", "node js", "react js", "mongodb", "python"],
    userPosted: "Chandu",
    userId: 1,
    askedOn: "jan 1",
    answer: [{
      answerBody: "Answer",
      userAnswered: 'chandu',
      answeredOn: "jan 2",
      userId: 2,
    }]
  }, {
      id: 2,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb", "python"],
      userPosted: "Chandu",
      userId: 1,
      askedOn: "jan 1",
      answer: [{
        answerBody: "Answer",
        userAnswered: 'chandu',
        answeredOn: "jan 2",
        userId: 2,
    }]
  },{
      id: 3,
      upVotes: 3,
      downVotes: 2,
      noOfAnswers: 2,
      questionTitle: "What is a function?",
      questionBody: "It meant to be",
      questionTags: ["java", "node js", "react js", "mongodb", "python"],
      userPosted: "Chandu",
      userId: 1,
      askedOn: "jan 1",
      answer: [{
        answerBody: "Answer",
        userAnswered: 'chandu',
        answeredOn: "jan 2",
        userId: 2,
    }]
  }]*/

  const checkAuth = () => {
    if(user === null){
      alert('Login or signup to Ask a Question');
      navigate("/Auth");
    }else{
      navigate("/AskQuestion");
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
        {
          location.pathname === '/' ? <h1>Top Questions</h1> : <h1> All Questions </h1>
        }
        
        <button type='button' onClick={checkAuth} className='ask-btn'>Ask Question</button>

      </div>
      <div>
        {
          questionsList.data === null ?
          <h1>Loading....</h1> :
          <>
            <p>{ questionsList.data.length } questions</p>
            <QuestionList questionsList={questionsList.data} />
          </>
        }
      </div>
    </div>
  )
}

export default HomeMainbar