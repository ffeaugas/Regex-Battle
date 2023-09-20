import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({
  cors: {
    origin: "*",
  },
})
export class EventsGateway {
  @WebSocketServer()
  io: Server;

  private onlineUsers: Map<string, string> = new Map();

  @SubscribeMessage("message")
  handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ): any {
    console.log(data);
    this.io.emit("message", `${client.id}: ${data}`);
    return "Bien recu chef";
  }

  @SubscribeMessage("userConnection")
  handleUserConnection(
    @MessageBody() username: string,
    @ConnectedSocket() client: Socket
  ): any {
    console.log("user :", `${client.id}: ${username}`);
    this.onlineUsers.set(username, client.id);
    console.log("Current UserMap : ", this.onlineUsers);
    this.io.emit("onlineUsersUpdate", this.onlineUsers);
    return;
  }

  handleConnection(@ConnectedSocket() client: Socket) {
    console.log(`Un nouvel utilisateur s'est connecté : ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Un utilisateur est parti : ${client.id}`);
    for (const [key, value] of this.onlineUsers)
      if (value === client.id) {
        this.onlineUsers.delete(key);
        break;
      }
    console.log("Current UserMap : ", this.onlineUsers);
  }
}
