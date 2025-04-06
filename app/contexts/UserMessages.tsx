"use client";

import { createContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

type MessageContent = {
  role: "assistant" | "user";
  content: string;
  refusal?: null | string;
};

type Message = MessageContent; 

type MESSAGECONTEXTT = {
  Messages: Message[];
  setMessages: Dispatch<SetStateAction<Message[]>>;
};

type USERMESSAGEST = {
  children: ReactNode;
};

export const UserMessages = createContext<MESSAGECONTEXTT | null>(null);

export const UserMessagesProvider: React.FC<USERMESSAGEST> = ({ children }) => {
  const [Messages, setMessages] = useState<Message[]>([]);

  return (
    <UserMessages.Provider value={{ Messages, setMessages }}>
      {children}
    </UserMessages.Provider>
  );
};
