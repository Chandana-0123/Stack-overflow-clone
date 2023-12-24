import React from 'react'
import './Tags.css'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const TagsList = ({tag}) => {
  return (
    <div className='tag'>
        <h5>{tag.tagName}</h5>
        <p>{tag.tagDesc}</p>
    </div>
  )
}

export default TagsList