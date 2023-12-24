import React from 'react'
import './Toggle.css'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

export const Toggle = ({handleChange, isChecked}) => {

return (
    <div className='toggle-container'>
        <input type='checkbox' id='check' className='toggle' onChange={handleChange} checked={isChecked} />
        <label htmlFor='check'>Dark Mode</label>
    </div>
  );
};

