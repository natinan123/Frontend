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

      })
  }

  getPoppular() {
    this.service.getPoppular().subscribe(
      (res) => {
        console.log(res);
        this.poppular = res;
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
