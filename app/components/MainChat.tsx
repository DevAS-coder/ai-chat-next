"use client";
import React, { useContext, useEffect, useRef } from 'react';
import { UserMessages } from '../contexts/UserMessages';
import Message from './Message';

function MainChat() {
    const chatRef = useRef<HTMLDivElement>(null);
    const context = useContext(UserMessages);

    if (!context) {
        return <div>No Messages Found!</div>;
    }

    const { Messages } = context;

    useEffect(() => {
        if (chatRef.current) {
            const intervalId = setInterval(() => {
                chatRef.current!.scrollTop = chatRef.current!.scrollHeight;
            }, 100);

            return () => clearInterval(intervalId); 
        }
    }, [Messages]);

    return (
        <div ref={chatRef} className='w-full lg:w-2/3 flex flex-col h-full overflow-y-auto pb-[80px]'>
            {
                Messages.length !== 0
                ? Messages.map((message, index) => (
                    message.role === 'assistant'
                    ? <Message key={index} message={message.content} role="assistant" /> 
                    : <Message key={index} message={message.content} role="user" />
                ))
                : <div className='text-center flex flex-col h-full justify-center'>No Messages Found! Start Messaging</div>
            }
        </div>
    );
}

export default MainChat;
