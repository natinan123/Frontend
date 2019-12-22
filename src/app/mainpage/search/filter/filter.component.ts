import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  products: Object;
  recoms: Object;

  selected1 = '';
  selected2 = '';
  selected3 = '';

  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,

  ) { }

  ngOnInit() {
    this.getProperty();


  }

  getProperty() {
    this.service.getProperty().subscribe(
      (res) => {
        console.log(res);

        this.products = res;

      })
  }


}
