import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { delay } from 'q';
import { FormGroup, FormControl } from '@angular/forms';
import { SessionService } from 'src/app/@service/session.service';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Options } from 'ng5-slider';

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
    Location_id: new FormControl('')

  })

  Price_min: number = 0;
  Price_max: number = 10000000;
  options: Options = {
    floor: 0,
    ceil: 50000000,
    // disabled: !element.active,
    showSelectionBar: true,
    step: 1000000,
    showTicks: true,
    translate: function (value) {
      return value + ' ' + 'บาท'
    },
  };

  Area_min: number = 0;
  Area_max: number = 500;
  options2: Options = {
    floor: 0,
    ceil: 1000,
    // disabled: !element.active,
    showSelectionBar: true,
    step: 50,
    showTicks: true,
    translate: function (a) {
      return a + ' ' + 'ตร.ม.'
    },
  };


  Type_id: any;
  Loc_zone: any;
  Location_id: any;
  user: any;
  provin: Object;
  type_name: any;



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
        // console.log(res);

        this.provin = res;

      })

  }

  


  // Modal 
  openModalAddreq(modal, data) {
   
    this.modalService.open(modal, { centered: true })
  }
 

  closeModal() {
    this.modalService.dismissAll();
  }

  onAddReq() {
    // console.log(this.Type_id, this.Loc_zone, this.Location_id)
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
