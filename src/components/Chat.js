import { collection, limit, onSnapshot, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useRef, useState } from 'react'
import { auth, db } from '../firebase';
import SendMessage from './SendMessage';
import SignOut from './SignOut'

const Chat = () => {
    const scroll = useRef()
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const messagesCollection = collection(db, "messages")
        const q = query(messagesCollection, limit(50), orderBy('createdAt', 'asc'))
        const unsub = onSnapshot(q, (querySnapshot) => {
            setMessages(querySnapshot.docs.map(doc => doc.data()));
        })
    }, [])
    return (
        <div className=''>
            <SignOut />
            <div className='w-screen bg-gradient-to-br duration-1000 from-yellow-500 to-yellow-200 p-4 rounded-t-2xl'>
                {messages.map(({ id, text, photoURL, uid }) => (
                    //${uid == auth.currentUser.uid ? 'sent' : 'recive' }
                    <div className=' flex flex-col p-2'>
                        <div className={`w-2/3 flex relative gap-4 p-3 ${uid == auth.currentUser.uid ? 'left-0 rounded-tr-3xl rounded-br-3xl rounded-tl-3xl rounded-bl-lg' : 'left-1/3 flex-row-reverse rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-lg'} items-center bg-gradient-to-tl from-slate-700 to-slate-400 shadow-2xl `} key={id}>
                            <img className='rounded-full w-16 h-16' src={photoURL} alt="" />
                            <p className='text-white p-4'>{text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat