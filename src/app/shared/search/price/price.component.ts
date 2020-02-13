import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

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
  ProFromprice: Object;
  user: any;
  status: any;
  link: string;
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
      price_min: minValue,
      price_max: maxValue,
      type_id: Type_id
    }
    console.log(data);
    this.service.getProFromprice(data).subscribe(
      (res) => {
        console.log(res);
        this.ProFromprice = res;
      })
  }

}
