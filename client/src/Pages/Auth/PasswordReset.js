import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import icon from '../../assets/icon.png'
import './auth1.css'
import { reset } from '../../actions/auth';

const PasswordReset = () => {

    const [name, setName ] = useState('')
    const [email, setEmail ] = useState('')
    const [otp, setotp ] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

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
        alert("Please SignUp")
        navigate('/Auth')
        dispatch(reset({email}, navigate))
        

        // ...
        }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        });
    }

  return (
    <div>
      <section className='auth-section'>
        <div className='auth-container-2'>
          {<img src={icon} alt='stack overflow' width="60" className='login-logo'/>}
          <h1>Forgot Password</h1>
            <label htmlFor='email' className='form-1'>
              <form className='form-3'>
                    <input type="email" name="email" id='email' onChange={(e) => {setEmail(e.target.value)}}placeholder='Email' required/>
              </form>
              </label>
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

export default PasswordReset