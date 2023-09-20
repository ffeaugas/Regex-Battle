"use client";

import SocketContext from "@/context/socket.context";
import { useSession } from "next-auth/react";
import { ReactNode, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

interface ProvidersProps {
  children: ReactNode;
}

const SocketProviders = ({ children }: ProvidersProps) => {
  const [serverSocket, setServerSocket] = useState<Socket | undefined>(
    undefined
  );
  const { data: session } = useSession();

  setTimeout(() => {
    if (session?.user) {
      console.log("Connecting as ", session.user.name);
      serverSocket.emit("userConnection", session.user.name);
    } else console.log("Connecting as visitor");
  }, 300);

  useEffect(() => {
    const socket: Socket = io("http://localhost:3001");
    setServerSocket(socket);
  }, []);

  return (
    <SocketContext.Provider value={{ serverSocket: serverSocket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProviders;
