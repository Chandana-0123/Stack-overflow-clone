import React from 'react'
import './RightSidebar.css'

import pen from '../../assets/pen.svg'
import comment from '../../assets/comment.svg'
import blackLogo from '../../assets/blackLogo.png'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18'/>
                <p>Behind the scenes building IBM watsonx, an AI and data platform</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={pen} alt="pen" width='18'/>
                <p>One weird trick for teaching users your software</p>
            </div>
        </div>
        <h4>Featured on Meta</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width='18'/>
                <p>Review queue workflows - Final release......</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment" width='18'/>
                <p>Please welcome valued Associate:#958 - V2Blast #959 - SpencerG</p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={blackLogo} alt="blackLogo" width='18'/>
                <p>OverflowAI Alpha invitation emails were distributed in error Nov 28th</p>
            </div>
        </div>
        <h4>Hot Meta Posts</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>48</p>
                <p>Why was this spam flag declined, yet the question marked as spam</p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>21</p>
                <p>Is a link to the "How to ask" help page a useful</p>
            </div>
        </div>
    </div>
  )
}

export default Widget