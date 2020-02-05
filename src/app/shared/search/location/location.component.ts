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
    Zone: new FormControl(''),
    Province_id: new FormControl(''),
    Location_id: new FormControl(''),
  })
  zones: any;
  provins: Object;
  district: Object;
  FromLocat: Object;
  FromProvin: Object;

  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getZonePro();

    this.firstFormGroup = this._formBuilder.group({
      Zone: ['', Validators.required],
      Province_id: ['', Validators.required],
      Location_id: ['', Validators.required],
    });


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
  onProFromLocat(location_id) {
    console.log(location_id);
    this.service.getProFromLocat(location_id).subscribe(
      (res) => {
        console.log(res);
        this.FromLocat = res;
      })
    // อสังหาจากจังหวัด
    this.service.getProFromProvin(location_id).subscribe(
      (res) => {
        console.log(res);
        this.FromProvin = res;
      })

  }


}
