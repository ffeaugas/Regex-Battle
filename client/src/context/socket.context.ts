"use client";

import { createContext } from "react";
import { Socket } from "socket.io-client";

const SocketContext = createContext({
  serverSocket: Socket,
});

export default SocketContext;
