"use client";

import Navbar from "@/components/Navbar/Navbar";
import SocketContext from "@/context/socket.context";
import { useContext, useEffect, useState } from "react";

export default function Social() {
  // const [socket, setSocket] = useState<typeof Socket>(null);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const { serverSocket } = useContext(SocketContext);

  // useEffect(() => {
  //   // const s = io("http://localhost:3001");
  //   // setSocket(s);

  //   return () => {
  //     serverSocket.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    if (!serverSocket) return;
    serverSocket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
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
