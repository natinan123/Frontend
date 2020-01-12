import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Options } from 'ng5-slider';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buy-test',
  templateUrl: './buy-test.component.html',
  styleUrls: ['./buy-test.component.scss']
})
export class BuyTestComponent implements OnInit {
  user: any;


  chat: any;
  Chatuser: Object;
  My: any;
  descination: any;
  taxtChat = new FormControl();

  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    // console.log(this.user);
    this.getChatUser();
    this.getChatDetail();
    this.My = this.user[0].email_id;

  }

  getChatDetail() {
    const source = this.user[0].email_id;
    const descination = this.descination;
    this.service.getChat(source, descination).subscribe(
      (res) => {
        console.log(res);
        this.chat = res;
      })
  }

  getChatUser() {
    const source = this.user[0].email_id;
    this.service.getChatUser(source).subscribe(
      (res) => {
        console.log(res);
        this.Chatuser = res;
      })
  }

  // เข้าดูข้อความ
  onClick(u) {
    console.log(u.descination);
    this.descination = u.descination;
    this.getChatDetail();
  }

  postTaxtChat() {

    const data = {
      source: this.user[0].email_id,
      descination: this.descination,
      mes_text: this.taxtChat.value
    }
    console.log(data);
    this.service.postChat(data).subscribe(
      async (res) => {
        this.getChatDetail();
        this.clearInputMethod1();

      }
    )
  }

  clearInputMethod1() {
    this.taxtChat.reset();

  }


}

