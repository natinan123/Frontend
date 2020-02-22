import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocketioService } from 'src/app/@service/socketio.service';

@Component({
  selector: 'app-test-socket',
  templateUrl: './test-socket.component.html',
  styleUrls: ['./test-socket.component.scss']
})
export class TestSocketComponent implements OnInit {

  message: string;
  messages: string[] = [];
  msg: string;
  texts: any[] = [];



  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private socketService: SocketioService,
  ) { }

  sendMessage() {
    this.socketService.sendMessage(this.message);
    console.log(this.message);
    console.log(this.messages);

    // this.message = '';
  }

  ngOnInit() {


    this.socketService.getMessages().subscribe((message) => {
      this.messages.push(message);
      console.log(this.message);
      console.log(this.messages);
    });

    this.socketService
      .getMessage()
      .subscribe(msg => {
        this.msg = "1st " + msg;
        this.texts.push(msg);
      });

  }

  sendMsg(msg) {
    this.socketService.sendMessage2(msg);
    this.msg = '';
  }

}
