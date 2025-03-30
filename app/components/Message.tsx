"use client";
import React from 'react'

type MESSAGET = {
    message: string
}

const Message: React.FC<MESSAGET> = ({message}) => {
  return (
    <div className='bg-gray-400 p-5 rounded-lg m-3 w-1/2'>
        <p>{message}</p>
    </div>
  )
}

export default Message