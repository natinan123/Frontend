import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  
  member: any;
  public chatFormGroup = new FormGroup({
    textChat: new FormControl(''),
  })
  textChat: any;
  source: any;
  // descination: any;
  textchat: any;

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
    this.getTableMember();




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


  // ? หน้า 2

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
  postFirstChatAll() {
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
        location.reload();

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
