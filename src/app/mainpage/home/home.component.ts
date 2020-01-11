import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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


  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,

  ) { }

  ngOnInit() {
    this.getProperty();
    this.getRecom();
    this.getPoppular();

  }

  getProperty() {
    this.service.getProperty().subscribe(
      (res) => {
        console.log(res);
        this.products = res;
        console.log(this.products);
  
      })
  }
// 
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
        console.log(this.recoms);
        // this.recom_pic = res.result;
        // console.log(this.recom_pic);
      })
  }

}
