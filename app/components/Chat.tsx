"use client";
import React, { useContext, useState } from 'react'
import SendMessage from './SendMessage';
import MainChat from './MainChat';

function Chat() {

    return (
        <div className='w-full h-full flex justify-center'>
            <MainChat/>
            <SendMessage/>
        </div>
    )
}

export default Chat