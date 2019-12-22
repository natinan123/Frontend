import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/@service/session.service';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/@service/server.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  user: any;
  members: Object;
  data: any;
  texts: Object;
  descination: any;

  constructor(
    private session: SessionService,
    private route: Router,
    private service: ServerService,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    this.data = this.user[0].email_id

    this.service.getMemberMessage(this.data).subscribe(
      (res) => {
        console.log(res);
        this.members = res;

      })



  }



}
