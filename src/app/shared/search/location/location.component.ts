import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  public firstFormGroup = new FormGroup({
    TypePro: new FormControl(''),
    Zone: new FormControl(''),
    Province_id: new FormControl(''),
    Location_id: new FormControl(''),
  })
  zones: any;
  provins: Object;
  district: Object;
  FromLocat: any;
  FromProvin: any;
  link: any;
  user: any;
  count_FromLocat: any;
  count_FromProvin: any;
  types: Object;



  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user[0].cus_status)
    this.getZonePro();
    this.getType();
    this.firstFormGroup = this._formBuilder.group({
      Zone: ['', Validators.required],
      Province_id: ['', Validators.required],
      Location_id: ['', Validators.required],
      TypePro: ['', Validators.required],
    });


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
  // ประเภท
  getType() {
    this.service.getType().subscribe(
      (res) => {
        console.log(res);
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
  onProvince(zone_id) {
    this.service.getProvince(zone_id).subscribe(
      (res) => {
        // console.log(res);
        this.provins = res;
      })
  }
  // เขต
  onLocation(province_id) {
    console.log(province_id);
    this.service.getLocOfPro(province_id).subscribe(
      (res) => {
        // console.log(res);
        this.district = res;
      })
  }

  // อสังหาจากเขต
  onProFromLocat(location_id, province_id, type_id) {
    const data = {
      location_id: location_id,
      type_id: type_id
    }
    console.log(data);
    this.service.getProFromLocat(data).subscribe(
      (res) => {
        console.log(res);
        this.FromLocat = res;
        this.count_FromLocat = this.FromLocat.length;
      })
    // อสังหาจากจังหวัด
    const data2 = {
      province_id: province_id,
      location_id: location_id
    }
    this.service.getProFromProvin(data2).subscribe(
      (res) => {
        console.log(res);
        this.FromProvin = res;
        this.count_FromProvin = this.FromProvin.length;

      })

  }



}
