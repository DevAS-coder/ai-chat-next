"use client";

import React, { useContext, useState } from 'react';
import { UserMessages } from '../contexts/UserMessages';

function SendMessage() {
    const [message, setMessage] = useState<string>(''); 
    const context = useContext(UserMessages);

    if (!context) {
        return <div>No Messages Found!</div>;
    }

    const { setMessages } = context;
    
    const getResponse = async () => {
        setMessages((prev) => [
            ...prev,
            { role: 'user', content: message }
        ]);
        setMessage('');
        
        setMessages((prev) => [
            ...prev,
            { role: 'assistant', content: 'Wait For Response...', refusal: null }
        ]);

        const response = await fetch("/api/openRouter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: message + '(پاسخ کوتاه)',
            }),
        });

        const data = await response.json();
        const finalResponse = await data.choices[0].message;

        setMessages((prev) => [
            ...prev.filter((msg) => msg.content !== 'Wait For Response...'), 
            finalResponse 
        ]);
        
    };

    return (
        <div className="fixed bottom-0 left-0 w-full flex items-center">
            <input 
                className="bg-blue-600 text-white w-4/5 outline-0 p-5" 
                type="text" 
                placeholder="Type your message here..." 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
            />

            <button
                className="bg-blue-800 p-5 w-1/5"
                onClick={getResponse}
            >
                Send
            </button>
        </div>
    );
}

export default SendMessage;
