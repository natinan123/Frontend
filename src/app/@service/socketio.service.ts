import { Injectable } from '@angular/core';
import { urlServer } from '../@URL/URL';
import * as io from 'socket.io-client';
// import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'; 

// export const environment = {
//   production: false,
//   SOCKET_ENDPOINT: 'http://localhost:3000'
// };

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket: SocketIOClient.Socket;

  // private socket;
  constructor(

    private sockets: Socket
  ) {
    this.socket = io(urlServer.ipServer);
  }


  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        observer.next(message);
      });
    });
  }
  getMessage() {
    return this.sockets
      .fromEvent<any>("msg")
      .map(data => data.msg);
  }

  sendMessage2(msg: string) {
    this.sockets
      .emit("msg", msg);
  }


}
