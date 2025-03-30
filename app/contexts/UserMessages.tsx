"use client"

import { createContext, Dispatch, SetStateAction, useState } from "react"

type MESSAGECONTEXTT = {
    Messages: any[],
    setMessages: Dispatch<SetStateAction<any[]>>
}

type USERMESSAGEST = {
    children: React.ReactNode
}

export const UserMessages = createContext<MESSAGECONTEXTT | null>(null)

export const UserMessagesProvider : React.FC<USERMESSAGEST> = ({children}) => {

    const [Messages, setMessages] = useState<any[]>([])

    return (
        <UserMessages.Provider value={{Messages, setMessages}}>
            {children}
        </UserMessages.Provider>
    )
}

