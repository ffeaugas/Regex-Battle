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

  // private clients: Set<string> = new Set();

  @SubscribeMessage("message")
  handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ): any {
    console.log(data);
    this.io.emit("message", data);

    // console.log("CLIENTTTTTTTTTTTTTTTTTTTT", client);
    return "Bien recu chef";
  }

  handleConnection(
    @ConnectedSocket() client: Socket,
    @MessageBody() username: string
  ) {
    // console.log(`Un nouvel utilisateur s'est connecté : ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    // console.log(`Un utilisateur est parti : ${client.id}`);
  }
}
