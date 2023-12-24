import React from 'react'

import Questions from './Questions.jsx'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const QuestionList = ({questionsList}) => {
  return (
    <>
        {
            questionsList.map((question) => ( 
                <Questions question = {question} key = {question._id} />
            ))
        }
    </>
  )
}

export default QuestionList