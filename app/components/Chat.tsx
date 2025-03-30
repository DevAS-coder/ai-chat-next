"use client";
import React, { useContext, useState } from 'react'
import SendMessage from './SendMessage';
import MainChat from './MainChat';

function Chat() {

    return (
        <div>
            <MainChat/>
            <SendMessage/>
        </div>
    )
}

export default Chat