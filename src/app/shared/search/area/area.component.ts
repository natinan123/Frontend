import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {


  minValue: number = 1000000;
  maxValue: number = 40000000;
  options: Options = {
    floor: 0,
    ceil: 50000000,
    step: 100000,
    noSwitching: true,

    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>ราคาต่ำสุด:</b> ฿ ' + value;
        case LabelType.High:
          return '<b>ราคาสูงสุด:</b> ฿ ' + value;
        default:
          return '฿ ' + value;
      }
    }
  };
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
    this.getType()
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
        // this.provins = res;
      })
  }


}
