import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar/Navbar'
import useLocalStorage from 'use-local-storage'

import AllRoutes from './AllRoutes'
import { fetchAllQuestions } from './actions/question'
import { fetchAllUsers } from './actions/users'
import './App.css';
import { Toggle } from './components/Toggle/Toggle';
import './components/Toggle/Toggle.css'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const App = () => {

  const date = new Date();
  //const hour = date.getHours();
  //const min = date.getMinutes();
  function time(){
    alert(date)
    alert("U can toggle between light and dark mode")
  }

  const dispatch = useDispatch()
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      <button className='toggle-container-2' onClick={time} >Get Time</button>
      <Router>
          <Navbar /> 
          <AllRoutes />
      </Router>
    </div>
  )
}

export default App