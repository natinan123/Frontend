import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {




  public loc_search = new FormGroup({
    Zone: new FormControl(''),
    Location_id: new FormControl('')

  })

  zones: Object;
  Loc_zones: any;
  loc_zone: any;
  selectedValue: any;
  provins: Object;
  products: Object;


  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,

  ) { }

  ngOnInit() {

    this.getZonePro();
    this.getTablepro();
    // console.log(this.Province);
  }


  // ภาค
  getZonePro() {
    this.service.getZone().subscribe(
      (res) => {
        // console.log(res);
        this.zones = res;
      }
    )
  }
  // จังหวัด
  onLocation(selectedValue) {
    this.loc_zone = selectedValue
    console.log(this.loc_zone)
    this.service.getProvince(this.loc_zone).subscribe(
      (res) => {
        // console.log(res);
        this.provins = res;
      })
  }

  getTablepro() {
    this.service.getProperty().subscribe(
      (res) => {
        // console.log(res);
        this.products = res;

      }
    )
  }



}
