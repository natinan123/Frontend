import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Options, LabelType } from 'ng5-slider';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-m-area',
  templateUrl: './m-area.component.html',
  styleUrls: ['./m-area.component.scss']
})
export class MAreaComponent implements OnInit {

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
          return value + ' ตร.ม.';
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

    this.link = '/mainpage/mainpage/property';



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
    if (Type_id != null) {
      this.service.getProFromArea(data).subscribe(
        (res) => {
          console.log(res);
          this.ProFromArea = res;
          this.count_list = this.ProFromArea.length;
        }
      )
    } else {
      this.modalService.open(this.error);
    }



  }

}
