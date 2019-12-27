import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-test-post-pro',
  templateUrl: './test-post-pro.component.html',
  styleUrls: ['./test-post-pro.component.scss']
})
export class TestPostProComponent implements OnInit {
  user: any;
  types: Object;
  Check1: any = false;
  Check2: any = false;
  Check3: any = false;
  Check4: any;
  Check5: any;
  Check6: any;
  Check7: any;
  Check8: any;
  Check9: any;
  Check10: any;

  public firstFormGroup = new FormGroup({
    Type_pro: new FormControl(''),
    Type_sell: new FormControl(''),
    Zone: new FormControl(''),
    Location_id: new FormControl(''),
    Pro_head: new FormControl(''),
    Pro_detail: new FormControl(''),
    Check1: new FormControl(''),
    Check2: new FormControl(''),
    Check3: new FormControl(''),
    Check4: new FormControl(''),
    Check5: new FormControl(''),
    Check6: new FormControl(''),
    Check7: new FormControl(''),
    Check8: new FormControl(''),
    Check9: new FormControl(''),
    Check10: new FormControl(''),
  })
  zones: Object;
  loc_zone: any;
  provins: Object;
  selectedValue: any;
  Type_pro: any;

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
    // console.log(this.user);

    this.getZonePro();
    this.getType();
    this.onLocation();




    console.log(this.firstFormGroup.value);

  }

  // ประเภทอสังหา
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
    this.loc_zone = this.selectedValue
    // console.log(this.loc_zone)
    this.service.getProvince(this.loc_zone).subscribe(
      (res) => {
        // console.log(res);

        this.provins = res;

      })

  }

  list: { id: number; title: string; checked: boolean; }[];

  get result() {
    return this.list.filter(item => item.checked);
  }

  onClick() {

    // console.log(this.firstFormGroup.value);
    const data = {
      style1: this.Check1,
      style2: this.Check2,
      style3: this.Check3,

    }
    console.log(data)
    this.service.postCheck(data).subscribe(
      async (res) => {


      }
    )


  }

}
