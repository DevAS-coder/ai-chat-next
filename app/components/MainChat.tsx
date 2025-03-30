"use client";
import React, { useContext } from 'react'
import { UserMessages } from '../contexts/UserMessages';

function MainChat() {

    const context = useContext(UserMessages)

    if (!context) {
        return <div>No Messages Found!</div>
    }

    const { Messages } = context

    return (
        <div>
            {
                Messages.length != 0
                ? <div>Messages Found!</div>
                : <div>No Messages Found!</div>
            }
        </div>
    )
}

export default MainChat