import React from 'react'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const WidgetTags = () => {
    const tags =['c', 'css', 'express', 'firebase', 'html', 'java', 'javascript', 'mern', 'mongodb', 'mysql', 'next.js', 'php', 'node.js', 'python', 'react.js']
    return (
      <div className='widget-tags'>
        <h3>Watched tags</h3>
        <div className='widget-tags-div'>
            {
                tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                ))
            }
        </div>

      </div>
    )
}

export default WidgetTags