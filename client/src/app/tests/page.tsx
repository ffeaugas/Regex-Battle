"use client";

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

//This page is just here to allow me to get use to socket.io
export default function Test() {
  const [socket, setSocket] = useState<typeof Socket>(null);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    const s = io("http://localhost:3001");
    setSocket(s);

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, [socket]);

  const sendMessage = () => {
    socket.emit("message", currentMessage);
    setCurrentMessage("");
  };

  return (
    <div>
      {/* Display the messages */}
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}

      {/* Input field for sending new messages */}
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />

      {/* Button to submit the new message */}
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}
