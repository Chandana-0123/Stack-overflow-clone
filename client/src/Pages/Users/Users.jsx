import React from 'react'

import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Users = () => {

  return (
    <div className='home-container-1'>
        <LeftSidebar />
        <div className='home-container-2' style={{marginTop: "50px"}}>
            <h1 style={{fontWeight: "400"}}>Users</h1>
                <UsersList /> 
        </div> 
    </div>
  )
}

export default Users