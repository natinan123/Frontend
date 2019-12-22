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



  }
  onLogout() {
    this.session.clearActiveUser();
    this.route.navigate(['/mainpage/mainpage/home'])
  }
}
