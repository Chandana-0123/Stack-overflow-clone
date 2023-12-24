import React from 'react'

const filter = () => {

    const editReview = () => {
        const textarea = document.getElementById('userreview');
        let badwords = /doc/gi;
        let userreview1 = textarea.value;
        let userreview2 = userreview1.replace(badwords,'##');
        document.getElementById('userreview').value = userreview2;
    }
  return (
    <div>
        <textarea name="" id="userreview" cols="30" rows="10" placeholder='Enter'></textarea>
        <input type='button' id='submiteview' onClick={editReview}/>
    </div>
  )
}

export default filter