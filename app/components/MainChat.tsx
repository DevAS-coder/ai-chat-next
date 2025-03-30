"use client";
import React, { useContext, useEffect, useRef } from 'react'
import { UserMessages } from '../contexts/UserMessages';
import Message from './Message';

function MainChat() {
    const chatRef = useRef<HTMLDivElement>(null)
    const context = useContext(UserMessages)

    if (!context) {
        return <div>No Messages Found!</div>
    }

    const { Messages } = context

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [Messages])
    
    return (
        <div ref={chatRef} className='w-1/2 h-full overflow-y-auto pb-[65px]'>
            {
                Messages.length != 0
                ? Messages.map((message, index) => (
                    <Message key={index} message={message} />
                ))
                : <div>No Messages Found!</div>
            }
        </div>
    )
}

export default MainChat