import { Injectable } from '@angular/core';
import { urlServer } from '../@URL/URL';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';


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
  constructor() {
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

 

}
