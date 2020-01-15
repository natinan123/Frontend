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
    console.log(enc);
    const detail2 = window.btoa(unescape(encodeURIComponent(str)));
    this.log2 = detail2



    this.test += `${this.textValue}\n`;
    var str = this.test;
    const abc = window.btoa(unescape(encodeURIComponent(str)));
    console.log(abc);
    const abc2 = window.btoa(unescape(encodeURIComponent(str)));
    this.test2 = abc2


  }


}
