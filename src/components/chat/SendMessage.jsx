import React, { useState } from 'react'
import "./ChatStyle.css";
import {addDoc, collection, serverTimestamp} from 'firebase/firestore'
import { auth, db } from '../../firebase';


const SendMessage = ({scroll}) => {
    const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault()
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    // adding data from firestore 
    const {uid, displayName} = auth.currentUser
    await addDoc(collection(db, 'messages'), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp()
    })
    setInput('')
     scroll.current.scrollIntoView({behavior: 'smooth'}) 
  }
  return (
    <div>

        <form  onSubmit={sendMessage} className='form_message' >
            <input value={input}
        onChange={(e) => setInput(e.target.value)} className='input_message' type="text" placeholder='Say Hi... !! ' />
            <button className='button_message' >Send</button>
        </form>
    </div>
  )
}

export default SendMessage