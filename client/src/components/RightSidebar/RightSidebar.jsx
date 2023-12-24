import React from 'react'
import './RightSidebar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const RightSidebar = () => {
  return (
    <aside className='right-sidebar'>
      <Widget />
      <WidgetTags />
    </aside>
  )
}

export default RightSidebar