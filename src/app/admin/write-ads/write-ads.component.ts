import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-write-ads',
  templateUrl: './write-ads.component.html',
  styleUrls: ['./write-ads.component.scss']
})


export class WriteAdsComponent implements OnInit {

  // public AdsFormGroup = new FormGroup({
  //   head: new FormControl(''),
  //   detail: new FormControl('')
  // })
  head: any;
  Head: any;
  detail: any;
  Detail: any;

  // onCheck() {

  //   this.Head = this.AdsFormGroup.value.head;
  //   this.Detail = this.AdsFormGroup.value.detail;
  //   console.log(this.Head);
  //   console.log(this.Detail);
  //   console.log(this.AdsFormGroup.value.detail);
  // }



  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private http: HttpClient,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit() {

  }

  textValue = '';
  log = '';

  logText(value: string): void {
    this.log += `${value}\n`;



    // var str = this.log;
    // const enc = window.btoa(str);
    // console.log(enc);


    var str = this.log;
    const enc = window.btoa(unescape(encodeURIComponent(str)));
    console.log(enc);






    const data = {
      style1: enc
    }
    this.service.postTestarea(data).subscribe(
      async (res) => {
      }
    )

  }





}
