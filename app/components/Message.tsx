"use client";
import React, { useEffect, useState } from 'react';

type MESSAGET = {
  message: string;
  role: string;
};

const Message: React.FC<MESSAGET> = ({ message, role }) => {
  const [aiMessage, setaiMessage] = useState('');

  useEffect(() => {
    if (role === "ai") {
      if(message == 'Wait For Response...') {
        setaiMessage(message);
        return;
      }
      const words = message.split(' ');

      let isMounted = true;

      const showMessage = async () => {
        for (let i = 0; i < words.length; i++) {
          await new Promise((resolve) => setTimeout(resolve, 100));
          if (!isMounted) return;
          setaiMessage((prev) => prev + words[i] + ' ');
        }
      };

      setaiMessage(''); 
      showMessage();

      return () => {
        isMounted = false; 
      };
    }
  }, [message]);

  return (
    <div className={`p-5 rounded-lg m-3 w-1/2 ${role === "user" ? "self-end bg-blue-600" : "self-start bg-gray-600"}`}>
      {message ? <p>{role === 'ai' ? aiMessage : message}</p> : <p className='text-white'>Loading</p>}
    </div>
  );
};

export default Message;
