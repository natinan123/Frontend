import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocketioService } from 'src/app/@service/socketio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // products: Object;
  // recoms: Object;
  // poppular: Object;
  // pop_pic: Object;
  // recom_pic: Object;
  // products_pic: Object;
  message: string;
  messages: string[] = [];



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

    this.message = '';
  }

  ngOnInit() {
    // this.getProperty();
    // this.getRecom();
    // this.getPoppular();

    this.socketService.getMessages().subscribe((message: string) => {
      this.messages.push(message);
      console.log(this.message);
      console.log(this.messages);
    });



  }









  // getProperty() {
  //   this.service.getProperty().subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.products = res;

  //     })
  // }

  // getPoppular() {
  //   this.service.getPoppular().subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.poppular = res;
  //       console.log(this.poppular);

  //     })
  // }

  // getRecom() {
  //   this.service.getRecommainpage().subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.recoms = res;
  //       console.log(this.recoms);
  //       // this.recom_pic = res.result;
  //       // console.log(this.recom_pic);
  //     })
  // }

}
