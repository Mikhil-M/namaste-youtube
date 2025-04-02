import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import { generateRandomMessage, generateRandomName } from '../utils/helper'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('')
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(addMessage({
        name: generateRandomName(),
        message: generateRandomMessage(20),
      }))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (liveMessage.trim()) {
      dispatch(addMessage({
        name: 'Mikhil',
        message: liveMessage,
      }))
      setLiveMessage('');
    }
  }

  return (
    <>
      <div className='border border-black w-full rounded-t-lg h-[653px] bg-gray-100 ml-2 overflow-y-scroll flex flex-col-reverse'>
          { chatMessages.map((chatMessage, index) => <ChatMessage key={index} name={chatMessage.name} message={chatMessage.message}/>)}
      </div>
      <form className='w-full border border-black rounded-b-lg ml-2 p-1' onSubmit={handleSendMessage}>
        <input type='text' className='p-2 border border-gray-300 w-[82%]' value={liveMessage} onChange={e => setLiveMessage(e.target.value)}/>
        <button className='ml-1 p-2 bg-gray-100'>Send</button>
      </form>
    </>
  )
}

export default LiveChat