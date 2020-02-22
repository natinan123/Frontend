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

  user: any;
  My: any;
  member: Object;


  public chatFormGroup = new FormGroup({
    taxtChat: new FormControl(''),

  })


  constructor(
    private service: ServerService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private modalService: NgbModal,
    private modal: NgbModal,
    private session: SessionService,
    private formBuilder: FormBuilder,


  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    // console.log(this.user);
    this.My = this.user[0].email_id;

    this.getTableMember();


  }


  getTableMember() {
    this.service.getMember().subscribe(
      (res) => {
        console.log(res);
        this.member = res;
      }
    )
  }


  eArray: any = [];
  //Checkbox Change detecting function
  getCheckbox(data) {
    let obj = {
      email_id: data
    }
    this.eArray.push(obj);
    console.log(this.eArray);
  }


  email_idArray: any = [];
  //Checkbox Change detecting function
  getCheckboxValues(data) {
    let obj = {
      email_id: data
    }
    this.email_idArray.push(obj);
    console.log(this.email_idArray);
  }








}


