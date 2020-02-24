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
  member: any;


  public chatFormGroup = new FormGroup({
    textChat: new FormControl(''),
  })

  textChat: any;
  source: any;
  descination: any;
  textchat: any;

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
  getCheckbox(email_id: string, isChecked: boolean) {

    if (isChecked) {
      this.eArray.push({ email_id: email_id });
    } else {
      this.eArray.pop({ email_id: email_id });
    }
    console.log(this.eArray);


  }

  // ส่งข้อความติดต่อครั้งแรก
  postFirstChat() {
    console.log(this.eArray);
    let result = []
    for (let i = 0; i < this.eArray.length; i++) {

      // result.push({
      //   source: this.user[0].email_id,
      //   descination: this.eArray[i].email_id,
      //   textchat: this.textChat
      // })
      result.push([
        this.source = this.user[0].email_id,
        this.descination = this.eArray[i].email_id,
        this.textchat = this.textChat
      ])
      console.log(result)
    }
    this.service.postFirstChatLiat(result).subscribe(
      async (res) => {

      }
    )
  }


  eArray2: any = [];
  CheckAllOptions() {
    if (this.member.every(val => val.checked == true)) {
      this.member.forEach(val => { val.checked = false });

    }
    else {
      this.member.forEach(val => { val.checked = true });
    }
    console.log(this.member);
    console.log(this.eArray2);
  }



}


