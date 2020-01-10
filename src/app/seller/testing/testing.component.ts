import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {
  mypro: Object;
  pro_pic: Object;
  pro_id: Object;
  test: Object;



  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private MouseEvent: FormBuilder,
  ) { }

  ngOnInit() {

    this.getPro();

  }

  getPro() {
    this.service.getTestPro().subscribe(
      (res) => {
        // console.log(res);
        this.mypro = res.row;
        console.log(this.mypro);
        this.pro_pic = res.result;
        console.log(this.pro_pic);


        // this.test = res;
        // console.log(this.test);
      }
    )
  }





}
