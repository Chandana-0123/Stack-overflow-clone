import React from 'react'
import { NavLink } from 'react-router-dom'

import './LeftSidebar.css'
import Globe from '../../assets/Globe.svg'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const LeftSidebar = () => {

  return (
    
    <div className="left-sidebar">
        <nav className="side-nav">
            <NavLink to='/' className="side-nav-links" activeclassname="active">
                <p>Home</p>
            </NavLink>
            <div className="side-nav-div">
                <div><p>PUBLIC</p></div>
                <NavLink to='/Question' className="side-nav-links" activeclassname="active" style={{paddingLeft: "40px"}}>
                    <img src={Globe} alt="Globe" />
                    <p style={{paddingLeft: "10px"}}>Questions</p>
                </NavLink>
                <NavLink to='/Tags' className="side-nav-links" activeclassname="active" style={{paddingLeft: "65px"}}>
                        <p>Tags</p>
                </NavLink>
                <NavLink to='/Users' className="side-nav-links" activeclassname="active" style={{paddingLeft: "65px"}}>
                        <p>Users</p>
                </NavLink>
                <NavLink to='/Discussion' className="side-nav-links" activeclassname="active" style={{paddingLeft: "65px"}}>
                        <p>Discussion</p>
                </NavLink>
                <NavLink to='/Video-Player' className="side-nav-links" activeclassname="active" style={{paddingLeft: "65px"}}>
                        <p>Video Player</p>
                </NavLink>
                <NavLink to='/Chatbot' className="side-nav-links" activeclassname="active" style={{paddingLeft: "65px"}}>
                        <p>Chatbot</p>
                </NavLink>
            </div>
        </nav>
    </div>
  )
}

export default LeftSidebar