import React from 'react'
import { auth } from '../firebase'

const SignOut = () => {
  return (
    <div>
      <button onClick={() => auth.signOut()}
        className='text-red-500 bg-gradient-to-br from-white to-slate-300 shadow-xl duration-700 py-2 px-12 rounded-3xl my-4'>
      SignOut
    </button>
    </div >
  )
}

export default SignOut