import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  @ViewChild('error', { static: false }) error: ElementRef;
  public typeFormGroup = new FormGroup({
    type: new FormControl(''),
    minValue: new FormControl(''),
    maxValue: new FormControl(''),
  })

  minValue: number = 0;
  maxValue: number = 30000;
  options: Options = {
    floor: 0,
    ceil: 50000,
    step: 100,
    noSwitching: true,

    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>ขนาดต่ำสุด:</b> ' + value + ' ตร.ม.';
        case LabelType.High:
          return '<b>ขนาดสูงสุด:</b> ' + value + ' ตร.ม.';
        default:
          return value + ' ตร.ม.' ;
      }
    }
  };
  types: Object;
  ProFromArea: any;
  user: any;
  status: any;
  link: string;
  pageSize = 16;
  page = 1;
  count_list: any;

  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit() {
    this.getType()

    this.user = this.session.getActiveUser();
    this.status = this.user[0].cus_status;
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

    this.typeFormGroup = this._formBuilder.group({
      type: ['', Validators.required],
      minValue: [''],
      maxValue: [''],
    });

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


  onCheck(minValue, maxValue, Type_id) {
    console.log(minValue, maxValue, Type_id);
    const data = {
      area_min: minValue,
      area_max: maxValue,
      type_id: Type_id
    }
    console.log(data);
    this.service.getProFromArea(data).subscribe(
      (res) => {
        console.log(res);
        this.ProFromArea = res;
        this.count_list = this.ProFromArea.length;
      },
      (err) => {
        this.modalService.open(this.error);
      }
      )
  }


}
