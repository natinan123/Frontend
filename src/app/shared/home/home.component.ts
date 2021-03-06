import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Object;
  recoms: Object;
  poppular: Object;
  pop_pic: Object;
  recom_pic: Object;
  products_pic: Object;
  user: any;
  status: any;
  searchText;
  link: string;
  time: any;


  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private session: SessionService,

  ) { }

  ngOnInit() {

    this.user = this.session.getActiveUser();
    this.status = this.user[0].cus_status;
    this.getProperty();
    this.getRecom();
    this.getPoppular();


    if (this.user[0].cus_status == null || this.user[0].cus_status == "") {
      this.link = '/mainpage/mainpage/detail';
    }
    if (this.user[0].cus_status == "admin") {
      this.link = '/admin/admin/detail';
    }
    if (this.user[0].cus_status == "seller") {
      this.link = '/seller/seller/detail';
    }
    if (this.user[0].cus_status == "buyer") {
      this.link = '/buyer/buyer/detail';
    }
  }

  getProperty() {
    this.service.getProperty().subscribe(
      (res) => {
        console.log(res);
        this.products = res;
        console.log(this.products);

      })
  }

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
