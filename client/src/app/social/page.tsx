"use client";

import Navbar from "@/components/Navbar/Navbar";
import SocketContext from "@/context/socket.context";
import { useContext, useEffect, useState } from "react";

export default function Social() {
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState<string>("");
  const { serverSocket } = useContext(SocketContext);

  function listenMessages(message: string) {
    setMessages((prevMessages: string[]) => [...prevMessages, message]);
  }

  useEffect(() => {
    if (!serverSocket) return;
    serverSocket.on("message", listenMessages);

    // return serverSocket.off("message", listenMessages);
  }, [serverSocket]);

  const sendMessage = () => {
    serverSocket.emit("message", currentMessage);
    setCurrentMessage("");
  };

  return (
    <>
      <Navbar />
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
        <input
          type="text"
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  );
}
