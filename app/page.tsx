"use client";

import { UserMessagesProvider } from "./contexts/UserMessages";
import Chat from "./components/Chat";

export default function Home() {

    return (
        <UserMessagesProvider>
            <div className="bg-black text-white h-screen flex justify-center ">
                <Chat/>
            </div>
        </UserMessagesProvider>

    );
}
