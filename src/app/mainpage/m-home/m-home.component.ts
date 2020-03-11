import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';

@Component({
  selector: 'app-m-home',
  templateUrl: './m-home.component.html',
  styleUrls: ['./m-home.component.scss']
})
export class MHomeComponent implements OnInit {
  products: Object;
  recoms: Object;
  poppular: Object;
  pop_pic: Object;
  recom_pic: Object;
  products_pic: Object;
  user: any;
  status: any;
  searchText;
  // link: string;
  time: any;
  link: string;
  pageSize = 8;
  page = 1;
  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private session: SessionService,

  ) { }

  ngOnInit() {

  
    // this.getProperty();
    this.getRecom();
    this.getPoppular();

    this.link = '/mainpage/mainpage/property';


    

  }

  // getProperty() {
  //   this.service.getProperty().subscribe(
  //     (res) => {
  //       console.log(res);
  //       this.products = res;
  //       console.log(this.products);

  //     })
  // }

  getPoppular() {
    this.service.getPoppular().subscribe(
      (res) => {
        console.log(res);
        this.poppular = res;
        console.log(this.poppular);

      })
  }

  getRecom() {
    this.service.getRecommainpage().subscribe(
      (res) => {
        console.log(res);
        this.recoms = res;

      })
  }
}
