import {
    WebSocketGateway,
    WebSocketServer,
    SubscribeMessage,
    OnGatewayConnection,
    OnGatewayDisconnect,
    WsResponse,
    MessageBody,
    ConnectedSocket
  } from '@nestjs/websockets';
  import { Logger } from '@nestjs/common';
  import { Server, Socket } from 'socket.io';

  @WebSocketGateway({
    cors: {
      origin: '*',
    }
  })
  export class NotificationsGateway {
    private readonly logger = new Logger('IO');
    @WebSocketServer()
    server: Server;
  
    @SubscribeMessage('events')
    async identity(@MessageBody() data: any, @ConnectedSocket() client: Socket): Promise<any> {
      this.logger.log(data);
      const event = 'events';
      client.broadcast.emit(event, data)
      //return { event, data }
    }
  }

