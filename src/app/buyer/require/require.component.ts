import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'q';
import { FormGroup, FormControl } from '@angular/forms';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-require',
  templateUrl: './require.component.html',
  styleUrls: ['./require.component.scss']
})
export class RequireComponent implements OnInit {

  @ViewChild('success', { static: false }) success: ElementRef;
  types: Object;
  province: Object;
  zones: Object;


  public addReq = new FormGroup({
    Type_id: new FormControl(''),
    Loc_zone: new FormControl(''),
    Location_id: new FormControl(''),
    Area_max: new FormControl(''),
    Area_min: new FormControl(''),
    Price_max: new FormControl(''),
    Price_min: new FormControl('')

  })

  Type_id: any;
  Loc_zone: any;
  Location_id: any;
  user: any;
  Area_max: any;
  Area_min: any;
  Price_max: any;
  Price_min: any;
  provin: Object;

  constructor(
    private session: SessionService,
    private service: ServerService,
    private modalService: NgbModal,
    private modal: NgbModal,
    private route: Router,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    // console.log(this.user);

    this.getType();
    this.getZonePro();
    // this.getProvince();

  }

  // ประเภท
  getType() {
    this.service.getType().subscribe(
      (res) => {
        // console.log(res);
        this.types = res;
      }
    )
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
  onLocation() {
    this.service.getProvince(this.Loc_zone).subscribe(
      (res) => {
        console.log(res);

        this.provin = res;

      })

  }

  // getProvince


  // Modal 
  openModalAddreq(modal, data) {

    this.modalService.open(modal, { centered: true })
  }


  closeModal() {
    this.modalService.dismissAll();
  }

  onAddReq() {
    console.log(this.Type_id, this.Loc_zone, this.Location_id)
    const data = {
      type_id: this.Type_id,
      loc_zone: this.Loc_zone,
      location_id: this.Location_id,
      req_area_max: this.Area_max,
      req_area_min: this.Area_min,
      req_price_max: this.Price_max,
      req_price_min: this.Price_min,
      email_id: this.user[0].email_id
    }
    // console.log(data);
    // console.log(this.AddLocation)

    this.service.postRequire(data).subscribe(
      async (res) => {
        this.modalService.dismissAll();
        this.modalService.open(this.success);
        await delay(2000);
        this.modalService.dismissAll();
      }
    )
  }

}
