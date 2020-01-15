import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from 'src/app/@service/server.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tast',
  templateUrl: './tast.component.html',
  styleUrls: ['./tast.component.scss']
})
export class TastComponent implements OnInit {
  aaa: string;
  a: string;
  b: string;





  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private session: SessionService,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {


  }

  textValue = '';
  textValue2 = '';

  log = '';
  log2 = '';
  test = '';
  test2 = '';
  public AdsFormGroup = new FormGroup({
    art_detail1: new FormControl(''),
    art_detail2: new FormControl(''),

  })


  logText(): void {
    this.log += `${this.textValue}\n`;

    var str = this.log;
    const enc = window.btoa(unescape(encodeURIComponent(str)));
    this.log2 = enc
    const enc2 = decodeURIComponent(window.atob(enc))
    this.aaa = enc2


    this.test += `${this.textValue2}\n`;
    var str2 = this.test;
    const abc = window.btoa(unescape(encodeURIComponent(str2)));
    console.log(abc);
    this.test2 = abc

    this.a = utf8_to_b64(this.log);
    this.b = b64_to_utf8(this.a)


  }


  onClear() {
    this.log = ''
    this.log2 = ''
    this.test = ''
    this.test2 = ''
  }

}


// Endcode
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
// Decode
function b64_to_utf8(str) {
  return decodeURIComponent(escape(window.atob(str)));
}

