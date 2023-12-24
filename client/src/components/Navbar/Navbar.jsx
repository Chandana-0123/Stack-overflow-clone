import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { jwtDecode } from 'jwt-decode';
import { useEffect } from 'react'

import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'
//import currentUserReducer from '../../reducers/currentUser'

import '../../App.css'

import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import Avatar from '../../components/Avatar/Avatar'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Navbar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    var User = useSelector((state) => (state.currentUserReducer))

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT'});
        navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = User?.token;
        if(token){
            const decodedToken = jwtDecode(token);
            if(decodedToken.exp * 1000 < new Date().getTime()){
                handleLogout();
            }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        // eslint-disable-next-line
    }, [User?.token, dispatch])

    return (
    <div >
        <nav className='main-nav'>
            <div className='navbar'>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt='logo' width="200" />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About</Link>
                <Link to='/' className='nav-item nav-btn'>Products</Link>
                <Link to='/' className='nav-item nav-btn'>For Teams</Link>
                <form>
                    <input type="text" placeholder='Search...'/>
                    <img src={search} alt="search" width="18" className='search-icon'/>
                </form>
                
                { User === null ?
                    <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
                    <>
                        <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                        <button className='nav-item nav-links' onClick={handleLogout} >Log out</button>
                    </>
                }
            </div>
        </nav>
    </div>
    )
}

export default Navbar