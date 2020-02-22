import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manage-sale',
  templateUrl: './manage-sale.component.html',
  styleUrls: ['./manage-sale.component.scss']
})
export class ManageSaleComponent implements OnInit {
  houses: Object;
  townhouses: Object;
  apartment: Object;
  commercial: Object;
  condos: Object;
  lands: Object;

  searchText;
  pageSize = 16;
  page = 1;



  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    this.getTableHouse();
    this.getTableTownhouse();
    this.getTableApartment();
    this.getTableCommercial();
    this.getTableCondominium();
    this.getTableLand();

  }

  getTableHouse() {
    this.service.getHouse().subscribe(
      (res) => {
        // console.log(res);
        this.houses = res;
      }
    )
  }

  getTableTownhouse() {
    this.service.getTownhouse().subscribe(
      (res) => {
        // console.log(res);
        this.townhouses = res;
      }
    )
  }
  getTableApartment() {
    this.service.getApartment().subscribe(
      (res) => {
        // console.log(res);
        this.apartment = res;

      }
    )
  }
  getTableCommercial() {
    this.service.getCommercial().subscribe(
      (res) => {
        // console.log(res);
        this.commercial = res;

      }
    )
  }
  getTableCondominium() {
    this.service.getCondominium().subscribe(
      (res) => {
        // console.log(res);
        this.condos = res;

      }
    )
  }
  getTableLand() {
    this.service.getLand().subscribe(
      (res) => {
        // console.log(res);
        this.lands = res;

      }
    )
  }



}
