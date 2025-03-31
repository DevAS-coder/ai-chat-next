"use client";
import React from 'react'

type MESSAGET = {
    message: string,
    role: string
}

const Message: React.FC<MESSAGET> = ({message, role}) => {
  return (
    <div className={` p-5 rounded-lg m-3 w-1/2 ${role == "user" ? "self-end" : "self-start"} ${role == "user" ? "bg-blue-600" : "bg-gray-600"}`}>
        <p>{message}</p>
    </div>
  )
}

export default Message