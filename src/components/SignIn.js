import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase';

const SignIn = () => {
function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
}

  return (
    <div>
        <button
        className='bg-gradient-to-br from-white to-gray-300 shadow-xl py-4 px-12 rounded-2xl active:shadow-inner my-40 '
        onClick={signInWithGoogle}>
            SignInWithGoogle
        </button>
    </div>
  )
}

export default SignIn