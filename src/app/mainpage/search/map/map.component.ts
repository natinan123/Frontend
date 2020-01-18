import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat2: number;
  lng2: number;

  lat: string = '';
  lng: string = '';
  pro_head: string = '';
  pro_type: string = '';
  roomm = new FormControl('');
  markers: Object;

  type_id: any;
  markers_pic: Object;

  constructor(
    private service: ServerService,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUserLocation();

    this.service.getProperty().subscribe(
      (res) => {
        console.log(res);

        this.markers = res;
        console.log(this.markers);
      
      })
    // this.onGetHouse();   

  }

  // ที่อยู่ผู้ใช้
  private getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat2 = position.coords.latitude;
        this.lng2 = position.coords.longitude;

      });
    }
  }

  // เลือกประเภท
  onGetHouse() {
    this.service.getProtype(this.type_id).subscribe(
      (res) => {
        console.log(res);

        this.markers = res;

      })
  }

  getMappro() {
    this.service.getProperty().subscribe(
      (res) => {
        console.log(res);

        this.markers = res;

      })
  }


}
