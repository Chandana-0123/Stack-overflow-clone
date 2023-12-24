import React, { useState } from 'react'
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import firebaseApp from '../../firebase';
import { signInWithPhoneNumber } from "firebase/auth";

import icon from '../../assets/icon.png'
import './Chatbot.css'

const Form = () => {

    const [name, setName ] = useState('')
    const [otp, setotp ] = useState('')

    const auth = getAuth();

    const configureCaptcha = () => {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                    onSignInSubmit();
                    console.log("Verified")
                },
                defaultCountry: "IN"
        });
    }

    const onSignInSubmit = (e) => {
        e.preventDefault()

        configureCaptcha()
        const phoneNumber = "+91" + name;
        console.log(phoneNumber)

        const appVerifier = window.recaptchaVerifier;

        const auth = getAuth();
        signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            console.log("OTP sent")
            // ...
            }).catch((error) => {
            // Error; SMS not sent
            // ...
            });

    }

    const onSubmitOTP = (e) => {
        e.preventDefault()
        const code = otp;
        console.log(code)
            
        window.confirmationResult.confirm(code).then((result) => {
        // User signed in successfully.
        const user = result.user;
        //console.log(JSON.stringify(user))
        alert("User Verified...Continue with chatbot")

        // ...
        }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        });
    }

  return (
    <div>
      <section class='form-section'>
        <div class='form-container-2'>
          {<img src={icon} alt='stack overflow' width="100" className='login-logo'/>}
            <label htmlFor='name' className='form-1'>
                <form onSubmit={onSignInSubmit} className='form-3'>
                    <div id='sign-in-button'></div>
                    <input type="number" value={name} placeholder='Mobile Number' required onChange={(e) => setName(e.target.value)}/>
                    <button type='submit'>Submit</button>
                </form>
            </label>
            <label htmlFor='otp' className='form-2'>
                <form onSubmit={onSubmitOTP} className='form-4'>
                    <input type="number"  value={otp} placeholder='OTP Number' required onChange={(e) => setotp(e.target.value)}/>
                    <button type='submit'>Submit</button>
                </form>
            </label>
        </div>
      </section>   
    </div> 
  )
}

export default Form