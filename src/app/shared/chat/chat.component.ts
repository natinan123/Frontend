import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { ServerService } from 'src/app/@service/server.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SessionService } from 'src/app/@service/session.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  user: any;


  chat: any;
  Chatuser: Object;
  My: any;
  descination: any;
  taxtChat = new FormControl('');
  SearchInput = new FormControl();
  Member: Object;
  add_email: any;
  Chatuser2: Object;


  constructor(
    private service: ServerService,
    private modalService: NgbModal,
    private session: SessionService,
    private route: ActivatedRoute,
    private router: Router,
    private modal: NgbModal,
    private _formBuilder: FormBuilder,

  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    // console.log(this.user);
    this.getChatUser();
    // this.getChatDetail();
    this.My = this.user[0].email_id;




  }

  // ดูข้อความ
  getChatDetail() {
    const source = this.user[0].email_id;
    const descination = this.descination;
    this.service.getChat(source, descination).subscribe(
      (res) => {
        console.log(res);
        this.chat = res;
      })
  }

  // ดูผู้ติดต่อ
  getChatUser() {
    const source = this.user[0].email_id;
    this.service.getChatUser(source).subscribe(
      (res) => {
        // console.log(res);
        this.Chatuser = res;
      })
  }





  // เข้าดูข้อความ
  onClick(u) {
    // console.log(u.descination);
    this.descination = u.descination;
    this.getChatDetail();
  }

  // ส่งข้อความติดต่อ
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

  // ล้างข้อความ
  clearInputMethod1() {
    this.taxtChat.reset();
  }


  //ค้นหาผู้ติดต่อ
  onSearchUser() {
    const data = this.SearchInput.value;
    this.service.getSearchUser(data).subscribe(
      (res) => {
        console.log(res);
        this.Member = res;

      })
  }

  openSearch(Search) {
    this.onSearchUser();

    this.modalService.open(Search);
  }



  addChat(i) {
    console.log(i);
    this.add_email = i.email_id;
    this.descination = i.email_id;
    this.postFirstChat();

  }
  // ส่งข้อความติดต่อครั้งแรก
  postFirstChat() {
    const data = {
      source: this.user[0].email_id,
      descination: this.add_email
    }
    console.log(data);
    this.service.postFirstChat(data).subscribe(
      async (res) => {
        this.modalService.dismissAll();

        this.getChatUser();
        this.getChatDetail();
      }
    )
  }

}
