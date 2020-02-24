import { Component, OnInit } from '@angular/core';
import { SessionService } from '../@service/session.service';
import { Router } from '@angular/router';
import { ServerService } from '../@service/server.service';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {
  user: any;
  fname: any;
  lname: any;
  data: any;
  avatarname: any;
  pic64: any;

  constructor(
    private session: SessionService,
    private route: Router,
    private service: ServerService,
  ) { }

  ngOnInit() {
    this.user = this.session.getActiveUser();
    console.log(this.user);

    this.service.getProfile(this.user[0].email_id).subscribe(
      (res) => {
        // console.log(res);
        this.fname = res[0].fname;
        this.lname = res[0].lname;
      }
    )

    this.data = this.user[0].email_id;
    this.showAvatar();
    this.putExpire();

  }

  // รูป avatar
  showAvatar() {
    this.service.getNameAvatar(this.data).subscribe(
      (res) => {
        // console.log(res)
        this.avatarname = res[0].filename,
          this.pic64 = res[0].picBase64
        // console.log(this.pic64);
        // console.log(this.avatarname);
      }
    );
  }
  onLogout() {
    this.session.clearActiveUser();
    this.route.navigate(['/mainpage/mainpage/home'])
  }

  // put อสังหาที่หมดอายุ
  putExpire() {
    this.service.putExpire().subscribe(
      (res) => {
      })
  }
}
