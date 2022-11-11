import React from 'react'
import './sign-in.styles.scss'

import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth();
  }

  return (
    <div className='signin-container'>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Google Pop Up Popup</button>
    </div>
  )
}

export default SignIn
