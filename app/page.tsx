"use client";

import { useState } from "react";

export default function Home() {

    const [message, setmessage] = useState<string>('')
    const [apiresponse, apisetresponse] = useState<string>('')

    const getResponse = async () => {
        const response = await fetch("/api/openRouter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: message,
            }),
        });
        const data = await response.json();
        apisetresponse(data.choices[0].message.content);
    };


    return (
        <div className="bg-black text-white h-screen flex justify-center ">
            <div className="h-5/6 p-10 mb-50 overflow-scroll">
                {
                    apiresponse ? <p>{apiresponse}</p>
                    : <p>Hello How Can I Help You?</p> 
                }
            </div>
            <div className="fixed bottom-0 left-0 w-full flex items-center">
                <input className="bg-blue-600 text-white w-4/5 outline-0 p-5" type="text" placeholder="Type your message here..." value={message} onChange={(e) => setmessage(e.target.value)} />
                <button className="bg-blue-800 p-5 w-1/5" onClick={getResponse}>Send</button>
            </div>
        </div>
    );
}
