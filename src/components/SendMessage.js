import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { auth, db } from '../firebase'

const SendMessage = ({scroll}) => {
    const [msg, setMsg] = useState("")

    async function sendMessage(e) {
        e.preventDefault()
        console.log('clicked');
        const { uid, photoURL } = auth.currentUser
console.log(msg);
        await addDoc(collection(db, "messages"), {
            text: msg,
            photoURL,
            uid,
            createdAt: serverTimestamp()
        })
        setMsg('')
        scroll.current.scrollIntoView({behavior: 'smooth'})
    }
    return (
        <div className='flex justify-center p-2 bg-yellow-300 border-t-4 border-sky-500 rounded-b-2xl'>
            <form onSubmit={sendMessage}>
                <input
                className=' rounded-2xl p-3 shadow-inner bg-gradient-to-br from-yellow-200 to-yellow-400'
                    value={msg}
                    placeholder='Message ...'
                    onChange={(e) => setMsg(e.target.value)}
                />
                <button
                className='rounded-full mx-3 p-3 bg-gradient-to-tl from-yellow-500 to-yellow-300 shadow-2xl'
                type='submit'>
                    Send
                </button>
            </form>
        </div>
    )
}

export default SendMessage