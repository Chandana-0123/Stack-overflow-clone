import React from 'react'
import moment from 'moment'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Avatar from '../../components/Avatar/Avatar'
import { deleteAnswer } from '../../actions/question.js'
import badge from '../../assets/badge.svg'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const DisplayAnswer = ({question, handleShare}) => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const User = useSelector((state) => (state.currentUserReducer))

  const rewardpts = 0;

  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
    alert("Answer Deleted....")
  }

  return (
    <div>
        {
              question.answer.map((ans) => (
                <div className='display-ans' key={ans._id}>
                    <p>{ans.answerBody}</p>
                    <div className='question-actions-user'>
                        <div>
                            <button type='button' onClick={handleShare}>Share</button>
                            {
                              User?.result?._id === ans?.userId && (
                                <button type='button' onClick={() => handleDelete(ans._id, question.noOfAnswers)}>Delete</button>
                              )
                            }
                        </div>
                        <div>
                            <p>Answered {moment(ans.answeredOn).fromNow()}</p>
                            <Link to={`/Users/${ans.userId}`} className='user-link' style={{color:'#0086d8'}}>
                            <Avatar backgroundColor="orange" px='8px' py='5px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                            <div>
                              {ans.userAnswered}
                            </div> 
                          </Link> 
                          <div><p>Awarded a badge for answering</p>
                            {
                                ans.userId ?
                                <img src={badge} alt="badge" width="15"/> : rewardpts
                            }
                          </div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAnswer